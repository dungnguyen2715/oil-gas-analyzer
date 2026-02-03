import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USER_MESSAGES } from '~/constants/messages'
import { CreateUserReqBody } from '~/models/requests/Users.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import usersServices from '~/services/users.services'

export const createUserController = async (req: Request<ParamsDictionary, any, CreateUserReqBody>, res: Response) => {
  console.log('vao controller')
  console.log('req:', req)

  const result = await usersServices.create(req.body)

  return res.status(HTTP_STATUS.CREATED).json({
    message: USER_MESSAGES.CREATE_USER_SUCCESS,
    result
  })
}
export const loginUserController = async (req: Request, res: Response) => {
  const { user }: any = req
  const { email } = user
  const { access_token, refresh_token } = await usersServices.login(email)
  const safeUser = user.toObject()
  delete safeUser.password
  delete safeUser.refresh_token
  return res.status(200).json({
    message: USER_MESSAGES.LOGIN_SUCCESS,
    user: safeUser,
    result: { access_token, refresh_token }
  })
}
export const logoutUserController = async (req: Request, res: Response) => {
  const { refresh_token } = req.body
  const result = await usersServices.logout(refresh_token)
  return res.status(200).json(result)
}
