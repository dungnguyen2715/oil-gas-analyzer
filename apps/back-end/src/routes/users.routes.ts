import { assignEngineerController } from './../controllers/users.controllers'
import { Router } from 'express'
import {
  changePasswordController,
  createUserController,
  deleteUserController,
  getListUserController,
  loginUserController,
  updateUserController,
  logoutUserController,
  forgotPasswordController,
  getMeController,
  verifyForgotPasswordTokenController,
  resignTokensController
} from '~/controllers/users.controllers'

import {
  changePasswordValidator,
  createUserValidator,
  deleteUserValidator,
  accessTokenValidator,
  refreshTokenValidator,
  getListUserValidator,
  getMeValidator,
  loginUserValidator,
  updateUserValidator,
  forgotPasswordValidator,
  verifyForgotPasswordTokenValidator,
  assignEngineerValidator
} from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))
usersRouter.post('/change-password', changePasswordValidator, wrapRequestHandler(changePasswordController))
usersRouter.get('/get-all', accessTokenValidator, getListUserValidator, wrapRequestHandler(getListUserController))
usersRouter.get('/me', accessTokenValidator, getMeValidator, wrapRequestHandler(getMeController))
usersRouter.put('/update', accessTokenValidator, updateUserValidator, wrapRequestHandler(updateUserController))
usersRouter.post(
  '/change-password',
  accessTokenValidator,
  changePasswordValidator,
  wrapRequestHandler(changePasswordController)
)
usersRouter.delete('/delete', accessTokenValidator, deleteUserValidator, wrapRequestHandler(deleteUserController))
/*logout
usersRouter.delete('/delete', accessTokenValidator, deleteUserValidator, wrapRequestHandler(deleteUserController))
usersRouter.post(
  '/change-password',
  accessTokenValidator,
  changePasswordValidator,
  wrapRequestHandler(changePasswordController)
)
/*
logout
method: POST
url: /users/logout
headers: { Authorization: 'Bearer <access_token>' }
body: {refresh_token: string}
*/
usersRouter.post('/logout', wrapRequestHandler(logoutUserController))
/*forgot-password
method: POST
url: /users/forgot-password
body: { email: string }
*/
usersRouter.post(
  '/forgot-password',
  accessTokenValidator,
  forgotPasswordValidator,
  wrapRequestHandler(forgotPasswordController)
)
/*Verify forgot-password token
method: POST
url: /users/verify-forgot-password-token
body: {forgot_password_token: string}
*/
usersRouter.post(
  '/verify-forgot-password-token',
  verifyForgotPasswordTokenValidator,
  wrapRequestHandler(verifyForgotPasswordTokenController)
)
usersRouter.post('/resign-tokens', refreshTokenValidator, wrapRequestHandler(resignTokensController))

usersRouter.post('/assign-engineer', assignEngineerValidator, wrapRequestHandler(assignEngineerController))
export default usersRouter
