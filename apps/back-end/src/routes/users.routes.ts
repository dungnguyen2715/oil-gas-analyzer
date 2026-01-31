import { Router } from 'express'
import { createUserController } from '~/controllers/users.controllers'
import { createUserValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()


usersRouter.post('/create', createUserValidator, wrapRequestHandler(createUserController))

export default usersRouter
