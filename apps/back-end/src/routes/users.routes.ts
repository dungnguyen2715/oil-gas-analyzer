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
  verifyForgotPasswordTokenController
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
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))
<<<<<<< HEAD
=======
usersRouter.delete('/:id', deleteUserValidator, wrapRequestHandler(deleteUserController))
usersRouter.post('/change-password', changePasswordValidator, wrapRequestHandler(changePasswordController))
/*logout
usersRouter.delete('/delete', accessTokenValidator, deleteUserValidator, wrapRequestHandler(deleteUserController))
usersRouter.post(
  '/change-password',
  accessTokenValidator,
  changePasswordValidator,
  wrapRequestHandler(changePasswordController)
)
>>>>>>> a5be5b3818ab6a28379eb87e78938e16b29335ae
/*
logout
method: POST
url: /users/logout
headers: { Authorization: 'Bearer <access_token>' }
body: {refresh_token: string}
*/
<<<<<<< HEAD
usersRouter.post(
  '/logout',
  accessTokenValidator,
  refreshTokenValidator,
  wrapRequestHandler(logoutUserController)
=======
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
usersRouter.post(
  '/verify-forgot-password-token',
  verifyForgotPasswordTokenValidator,
  wrapRequestHandler(verifyForgotPasswordTokenController)
>>>>>>> a5be5b3818ab6a28379eb87e78938e16b29335ae
)
export default usersRouter
