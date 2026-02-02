import { Router } from 'express'
import {
  changePasswordController,
  createUserController,
  deleteUserController,
  getListUserController,
  loginUserController,
  updateUserController,
  logoutUserController,
  forgotPasswordController
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
  verifyForgotPasswordTokenValidator
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
/*logout
method: POST
url: /users/logout
headers: { Authorization: 'Bearer <access_token>' }
body: {refresh_token: string}
*/
usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequestHandler(logoutUserController))
/*forgot-password
method: POST
url: /users/forgot-password
body: { email: string }
*/
usersRouter.post('/forgot-password', forgotPasswordValidator, wrapRequestHandler(forgotPasswordController))
/*Verify forgot-password token 
method: POST
url: /users/verify-forgot-password-token
body: {forgot_password_token: string} 
*/
usersRouter.post('/verify-forgot-password-token', verifyForgotPasswordTokenValidator, wrapRequestHandler(verifyForgotPasswordTokenController))
export default usersRouter
