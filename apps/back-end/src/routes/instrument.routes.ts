import { Router } from 'express'
import {
  createInstrumentController,
  updateInstrumentController,
  getInstrumentByIdController,
  getListInstrumentsController,
  deleteInstrumentController
} from '~/controllers/instrument.controller'
import {
  createInstrumentValidator,
  updateInstrumentValidator,
  getInstrumentByIdValidator,
  deleteInstrumentValidator
} from '~/middlewares/instrument.middleware'
import { wrapRequestHandler } from '~/utils/handlers'

const instrumentRouter = Router()

instrumentRouter.post(
  '/',
  createInstrumentValidator,
  wrapRequestHandler(createInstrumentController.bind(createInstrumentController))
)

instrumentRouter.get('/', wrapRequestHandler(getListInstrumentsController.bind(getListInstrumentsController)))

instrumentRouter.get(
  '/:id',
  getInstrumentByIdValidator,
  wrapRequestHandler(getInstrumentByIdController.bind(getInstrumentByIdController))
)

instrumentRouter.patch(
  '/:id',
  updateInstrumentValidator,
  wrapRequestHandler(updateInstrumentController.bind(updateInstrumentController))
)

instrumentRouter.delete(
  '/:id',
  deleteInstrumentValidator,
  wrapRequestHandler(deleteInstrumentController.bind(deleteInstrumentController))
)

export default instrumentRouter
