import { Router } from 'express'
import {
  createUserController,
  getListUserController,
  loginUserController,
  updateUserController,
  logoutUserController 
} from '~/controllers/users.controllers'
import {
  createUserValidator,
    accessTokenValidator,
  refreshTokenValidator
  getListUserValidator,
  loginUserValidator,
  updateUserValidator
} from '~/middlewares/users.middlewares'

import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.get('/get-all', getListUserValidator, wrapRequestHandler(getListUserController))
usersRouter.put('/:id', updateUserValidator, wrapRequestHandler(updateUserController))
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
