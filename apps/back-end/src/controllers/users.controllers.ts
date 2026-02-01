/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USER_MESSAGES } from '~/constants/messages'
import { CreateUserReqBody, GetListUserReqParams, UpdateUserReqBody } from '~/models/requests/Users.requests'
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
      message: USER_MESSAGES.NO_DATA,
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
    message: USER_MESSAGES.GET_LIST_USER_SUCCESS,
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

export const updateUserController = async (req: Request<ParamsDictionary, any, UpdateUserReqBody>, res: Response) => {
  const { id } = req.params
  // Giả sử adminId được lấy từ decode token của người thực hiện (Actor)
  // const adminId = req.decoded_authorization?.user_id
  const adminId = '65b1234567890abcdef12345'
  const result = await usersServices.updateUser(id as string, adminId, req.body)
  return res.status(HTTP_STATUS.OK).json({
    message: USER_MESSAGES.UPDATE_USER_SUCCESS,
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
