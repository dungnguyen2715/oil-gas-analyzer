import jwt from 'jsonwebtoken'

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

export default signToken
