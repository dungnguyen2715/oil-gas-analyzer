import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignTokenParams {
  payload: string | Buffer | object
  privateKey?: string
  options?: jwt.SignOptions
}

const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET as string,
  options = { algorithm: 'HS256' }
}: SignTokenParams): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error || !token) {
        return reject(error)
      }
      resolve(token)
    })
  })
}

export const verifyAccessToken = ({
  token,
  secretKey = process.env.JWT_SECRET as string
}: {
  token: string
  secretKey?: string
}) => {
  return new Promise<jwt.JwtPayload>((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        throw reject(error)
      }
      resolve(decoded as JwtPayload)
    })
  })
}

export const verifyRefreshToken = ({
  token,
  secretKey = process.env.JWT_SECRET as string
}: {
  token: string
  secretKey?: string
}) => {
  return new Promise<jwt.JwtPayload>((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        throw reject(error)
      }
      resolve(decoded as JwtPayload)
    })
  })
}

export default signToken
