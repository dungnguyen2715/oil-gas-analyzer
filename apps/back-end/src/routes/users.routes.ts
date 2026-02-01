import { Router } from 'express'
import {
  changePasswordController,
  createUserController,
  deleteUserController,
  getListUserController,
  loginUserController,
  updateUserController
} from '~/controllers/users.controllers'
import {
  changePasswordValidator,
  createUserValidator,
  deleteUserValidator,
  getListUserValidator,
  getMeValidator,
  loginUserValidator,
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
export default usersRouter
