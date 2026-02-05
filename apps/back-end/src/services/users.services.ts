import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import { UserModel } from '~/models/schemas/User.schema'
import { hashPassword } from '~/utils/crypto'
import signToken, { decodeToken, verifyRefreshToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enum'
import { USER_MESSAGES } from '~/constants/messages'
import { CreateUserReqBody, ForgotPasswordReqBody, UpdateUserReqBody } from '~/models/requests/Users.requests'

import { pick } from 'lodash'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { sendForgotPasswordEmail } from './email.service'

class UsersServices {
  private signAccessToken(id: string) {
    return signToken({
      payload: {
        user_id: id,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }
  private signRefreshToken(id: string) {
    return signToken({
      payload: {
        user_id: id,
        token_type: TokenType.RefreshToken
      },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }
  private signAccessRefreshTokens(id: string) {
    return Promise.all([this.signAccessToken(id), this.signRefreshToken(id)])
  }
  private signForgotPasswordToken(email: string) {
    return signToken({
      payload: {
        email,
        token_type: TokenType.ForgotPasswordToken
      },
      options: {
        expiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }
  async resignToken(refreshToken: string) {
    const decoded = await verifyRefreshToken({ token: refreshToken })
    if (!decoded) {
      throw new ErrorWithStatus({
        message: USER_MESSAGES.REFRESH_TOKEN_INVALID,
        status: HTTP_STATUS.UNAUTHORIZED
      })
    }

    const user = await UserModel.findOne({ refresh_token: refreshToken })
    if (!user) {
      throw new ErrorWithStatus({
        message: USER_MESSAGES.REFRESH_TOKEN_INVALID,
        status: HTTP_STATUS.UNAUTHORIZED
      })
    }

    const newRefreshToken = await this.signRefreshToken(user._id.toString())

    await UserModel.updateOne({ refresh_token: refreshToken }, { $set: { refresh_token: newRefreshToken } })

    const newAccessToken = await this.signAccessToken(user._id.toString())

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken
    }
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email })
  }
  async isEmailExisted(email: string): Promise<boolean> {
    const user = await UserModel.findOne({ email }).lean()
    return Boolean(user)
  }
  async create(payload: CreateUserReqBody) {
    const { full_name, email, password, phone } = payload

    // 1. Check email tồn tại
    const isExist = await this.isEmailExisted(email)
    if (isExist) {
      throw new Error(USER_MESSAGES.EMAIL_ALREADY_EXISTS)
    }

    // 2. Tạo user
    const user_id = new ObjectId()

    const newUser = new UserModel({
      _id: user_id,
      email,
      full_name,
      phone,
      password: hashPassword(password),
      username: `user_${user_id.toString()}`,
      status: 'active',
      fail_login_attempts: 0
    })

    const savedUser = await newUser.save()

    // 3. Trả dữ liệu sạch (KHÔNG auto login)
    const userResponse = savedUser.toObject()
    delete (userResponse as any).password
    delete (userResponse as any).refresh_token

    return {
      user: userResponse
    }
  }
  async login(email: string) {
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error(USER_MESSAGES.USER_NOT_FOUND)
    }
    const [access_token, refresh_token] = await this.signAccessRefreshTokens(user._id.toString())
    user.refresh_token = refresh_token
    await user.save()
    return {
      access_token,
      refresh_token
    }
  }
  async logout(refresh_token: string) {
    await UserModel.updateOne({ refresh_token }, { $set: { refresh_token: '' } })
    return {
      message: USER_MESSAGES.LOGOUT_SUCCESS
    }
  }

  async getListUser(query: { page?: string; limit?: string; role?: string; status?: string }) {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit

    const filter: any = {}
    if (query.role) filter.role_id = query.role
    if (query.status) filter.status = query.status

    // Thực hiện truy vấn song song: Lấy data và Đếm tổng số lượng
    const [users, total] = await Promise.all([
      UserModel.find(filter)
        .select('full_name email role_id status _id') // Chỉ lấy metadata cần thiết
        .sort({ full_name: 1 }) // Sắp xếp theo tên (A-Z) theo Acceptance Criteria
        .skip(skip)
        .limit(limit)
        .lean(), // Tăng hiệu suất bằng cách trả về plain object
      UserModel.countDocuments(filter)
    ])

    return {
      users,
      total,
      page,
      limit,
      total_pages: Math.ceil(total / limit)
    }
  }
  async findUserById(id: string) {
    return await UserModel.findById(id).lean()
  }
  async updateUser(userId: string, adminId: string, payload: UpdateUserReqBody) {
    const filteredPayload = pick(payload, ['phone', 'email', 'password', 'date_of_birth'])
    if (filteredPayload.password) {
      filteredPayload.password = hashPassword(filteredPayload.password)
    }
    const oldUser = await UserModel.findById(userId).lean()
    if (!oldUser) {
      throw new Error(USER_MESSAGES.USER_NOT_FOUND)
    }
    const fieldsChanged = (Object.keys(filteredPayload) as Array<keyof typeof filteredPayload>).filter((key) => {
      return String(filteredPayload[key]) !== String((oldUser as any)[key])
    })
    if (fieldsChanged.length === 0) {
      throw new Error(USER_MESSAGES.NO_FIELDS_CHANGED)
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: filteredPayload,
        $push: {
          logs: {
            admin_id: new ObjectId(adminId), // Đảm bảo lưu đúng kiểu dữ liệu ID
            updated_at: new Date(),
            fields_changed: fieldsChanged // Chỉ lưu các trường thực sự bị đổi
          }
        }
      },
      {
        new: true,
        runValidators: true,
        context: 'query' // Giúp Mongoose validator hoạt động chính xác trong hàm update
      }
    )
      .select('-password')
      .lean()
    return updatedUser
  }
  async deleteUser(userId: string) {
    const user = await UserModel.findById(userId)
    if (!user) {
      throw new ErrorWithStatus({ message: USER_MESSAGES.USER_NOT_FOUND, status: HTTP_STATUS.NOT_FOUND })
    }
    user.status = 'deleted'
    await user.save()
  }
  async changePassword(userId: string, oldPassword: string, newPassword: string) {
    const user = await UserModel.findById(userId)
    if (!user) {
      throw new ErrorWithStatus({ message: USER_MESSAGES.USER_NOT_FOUND, status: HTTP_STATUS.NOT_FOUND })
    }
    const hashedOldPassword = hashPassword(oldPassword)
    if (user.password !== hashedOldPassword) {
      throw new Error(USER_MESSAGES.PASSWORD_INCORRECT)
    }
    user.password = hashPassword(newPassword)
    await user.save()
  }
  async forgotPassword(email: string) {
    const forgot_password_token = await this.signForgotPasswordToken(email)
    const { exp, expiresAt } = decodeToken(forgot_password_token)
    //cap nhat len db
    await UserModel.updateOne({ email }, { $set: { forgot_password_token } })
    // Gửi email chứa token đến user (bỏ qua bước này trong ví dụ)
    await sendForgotPasswordEmail(email, forgot_password_token)
    console.log('http://localhost:4000/forgot-password?token=' + forgot_password_token)
    return {
      message: USER_MESSAGES.CHECK_EMAIL_FOR_RESET_PASSWORD,
      expiresAt: expiresAt
    }
  }
  async changePasswordBecauseForgotPassword(payload: ForgotPasswordReqBody) {
    const { new_password, forgot_password_token } = payload
    await UserModel.findOneAndUpdate(
      {
        forgot_password_token
      },
      {
        $set: {
          password: hashPassword(new_password),
          forgot_password_token: ''
        }
      }
    )
    return {
      message: USER_MESSAGES.UPDATE_PASSWORD_SUCCESS
    }
  }
}

const usersServices = new UsersServices()
export default usersServices
