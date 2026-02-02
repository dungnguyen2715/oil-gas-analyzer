import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enum'

export interface CreateUserReqBody {
  full_name: string
  email: string
  password: string
  phone: string
}
export interface TokenPayload extends JwtPayload {
  email: string
  token_type: TokenType
}

export interface GetListUserReqParams {
  page: number
  limit: number
  role: string
  status: string
}

export interface UpdateUserReqBody {
  phone?: string
  email?: string
  password?: string
  date_of_birth?: string
  [key: string]: any
}

export interface TokenPayload extends JwtPayload {
  email: string
  token_type: TokenType
}

export interface ForgotPasswordReqBody {
  email: string
}
export interface DeleteUserReqParams {
  id: string
}

export interface ChangePasswordReqBody {
  old_password: string
  new_password: string
}
