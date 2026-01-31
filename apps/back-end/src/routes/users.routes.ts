import { Router } from 'express'
import { createUserController, getListUserController } from '~/controllers/users.controllers'
import { createUserValidator, getListUserValidator } from '~/middlewares/users.middlewares'
import { createUserController, loginUserController } from '~/controllers/users.controllers'
import { createUserValidator, loginUserValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.get('/get-all', getListUserValidator, wrapRequestHandler(getListUserController))
usersRouter.post('/login', loginUserValidator, wrapRequestHandler(loginUserController))

export default usersRouter
