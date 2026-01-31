import { Router } from 'express'
import { createUserController, getListUserController, loginUserController } from '~/controllers/users.controllers'
import { createUserValidator, getListUserValidator, loginUserValidator } from '~/middlewares/users.middlewares'

import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.get('/get-all', getListUserValidator, wrapRequestHandler(getListUserController))
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))

export default usersRouter
