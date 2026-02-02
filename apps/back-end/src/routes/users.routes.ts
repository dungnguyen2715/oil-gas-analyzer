import { Router } from 'express'
import { createUserController, loginUserController, logoutUserController } from '~/controllers/users.controllers'
import {
  accessTokenValidator,
  createUserValidator,
  loginUserValidator,
  refreshTokenValidator
} from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))
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
