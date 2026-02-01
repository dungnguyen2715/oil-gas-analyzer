import { Router } from 'express'
import {
  createUserController,
  getListUserController,
  loginUserController,
  updateUserController
} from '~/controllers/users.controllers'
import {
  createUserValidator,
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

export default usersRouter
