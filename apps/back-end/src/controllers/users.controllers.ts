import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USER_MESSAGES } from '~/constants/messages'
import { CreateUserReqBody, GetListUserReqParams } from '~/models/requests/Users.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import usersServices from '~/services/users.services'

export const createUserController = async (req: Request<ParamsDictionary, any, CreateUserReqBody>, res: Response) => {
  const result = await usersServices.create(req.body)

  return res.status(HTTP_STATUS.CREATED).json({
    message: USER_MESSAGES.CREATE_USER_SUCCESS,
    result
  })
}

export const getListUserController = async (
  req: Request<ParamsDictionary, any, GetListUserReqParams>,
  res: Response
) => {
  const result = await usersServices.getListUser(req.query)

  if (result.users.length === 0) {
    return res.status(HTTP_STATUS.OK).json({
      message: 'no data',
      result: {
        users: [],
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          total_pages: result.total_pages
        }
      }
    })
  }

  return res.json({
    message: 'Get list user success',
    result: {
      users: result.users,
      pagination: {
        total: result.total,
        page: result.page,
        limit: result.limit,
        total_pages: result.total_pages
      }
    }
  })
}
export const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const result = await usersServices.login(email, password)

  return res.status(200).json({
    message: USER_MESSAGES.LOGIN_SUCCESS,
    result
  })
}
