import { Router } from 'express'
import {
  changePasswordController,
  createUserController,
  deleteUserController,
  getListUserController,
  loginUserController,
  updateUserController,
  logoutUserController 
} from '~/controllers/users.controllers'

import {
  accessTokenValidator,
  changePasswordValidator,
  createUserValidator,
  deleteUserValidator,
    accessTokenValidator,
  refreshTokenValidator
  getListUserValidator,
  getMeValidator,
  loginUserValidator,
  refreshTokenValidator,
  updateUserValidator
} from '~/middlewares/users.middlewares'

import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.get('/get-all', getListUserValidator, wrapRequestHandler(getListUserController))
usersRouter.get('/me', getMeValidator)
usersRouter.put('/:id', updateUserValidator, wrapRequestHandler(updateUserController))
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))
usersRouter.delete('/:id', deleteUserValidator, wrapRequestHandler(deleteUserController))
usersRouter.post('/change-password', changePasswordValidator, wrapRequestHandler(changePasswordController))
/*
logout
method: POST
url: /users/logout
headers: { Authorization: 'Bearer <access_token>' }
body: {refresh_token: string}
*/
usersRouter.post(
  '/logout',
  accessTokenValidator,
  refreshTokenValidator,
  wrapRequestHandler(logoutUserController)
)
export default usersRouter
