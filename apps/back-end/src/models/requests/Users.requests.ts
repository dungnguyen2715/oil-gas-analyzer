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
