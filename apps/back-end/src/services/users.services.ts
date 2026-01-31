import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import { UserModel } from '~/models/schemas/User.schema'
import { CreateUserReqBody } from '~/models/requests/Users.requests'
import { hashPassword } from '~/utils/crypto'
import signToken from '~/utils/jwt'
import { TokenType } from '~/constants/enum'
import { USER_MESSAGES } from '~/constants/messages'

class UsersServices {
  // ================= JWT =================
  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }

  private signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken
      },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn']
      }
    })
  }

  // ================= COMMON =================
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

  // ================= LOGIN =================
  async login(email: string, password: string) {
    // 1. Tìm user
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error(USER_MESSAGES.EMAIL_INCORRECT)
    }

    // 2. Check status
    if (user.status !== 'active') {
      throw new Error(USER_MESSAGES.USER_IS_BLOCKED)
    }

    // 3. Hash password input
    const hashedInputPassword = hashPassword(password)
    if (hashedInputPassword !== user.password) {
      // tăng fail count (tuỳ chọn)
      user.fail_login_attempts = (user.fail_login_attempts || 0) + 1
      await user.save()

      throw new Error(USER_MESSAGES.PASSWORD_INCORRECT)
    }

    // 4. Reset fail count
    user.fail_login_attempts = 0

    // 5. Sign token
    const userIdString = user._id.toString()

    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(userIdString),
      this.signRefreshToken(userIdString)
    ])

    // 6. LƯU refresh token
    user.refresh_token = refresh_token
    await user.save()

    // 7. Trả dữ liệu sạch
    const userResponse = user.toObject()
    delete (userResponse as any).password

    return {
      user: userResponse,
      access_token,
      refresh_token
    }
  }
}

const usersServices = new UsersServices()
export default usersServices
