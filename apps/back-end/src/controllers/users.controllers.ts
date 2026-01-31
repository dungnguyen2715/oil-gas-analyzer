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
