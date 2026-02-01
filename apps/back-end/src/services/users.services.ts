import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import { UserModel } from '~/models/schemas/User.schema'
import { CreateUserReqBody } from '~/models/requests/Users.requests'
import { hashPassword } from '~/utils/crypto'
import signToken from '~/utils/jwt'
import { TokenType } from '~/constants/enum'
import { USER_MESSAGES } from '~/constants/messages'

class UsersServices {
  private signAccessToken(email: string) {
    return signToken({
      payload: {
        email,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }
  private signRefreshToken(email: string) {
    return signToken({
      payload: {
        email,
        token_type: TokenType.RefreshToken
      },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }
  private signAccessRefreshTokens(email: string) {
    return Promise.all([this.signAccessToken(email), this.signRefreshToken(email)])
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
    const [access_token, refresh_token] = await this.signAccessRefreshTokens(email)
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
}

const usersServices = new UsersServices()
export default usersServices
