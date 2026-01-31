import { Router } from 'express'
import { createUserController, getListUserController } from '~/controllers/users.controllers'
import { createUserValidator, getListUserValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))
usersRouter.get('/get-all', getListUserValidator, wrapRequestHandler(getListUserController))

export default usersRouter
