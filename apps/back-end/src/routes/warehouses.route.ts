import {
  creatWarehouseController,
  deleteWarehouseController,
  getListWarehouseController,
  getWarehouseByIdController,
  updateWarehouseController
} from '~/controllers/warehouses.controller'
import {
  createWarehouseValidator,
  deleteWarehouseValidator,
  getListWarehouseValidator,
  getWarehouseValidator,
  updateWarehouseValidator
} from '~/middlewares/warehouses.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { Router } from 'express'

const warehousesRouter = Router()

warehousesRouter.post('/create', createWarehouseValidator, wrapRequestHandler(creatWarehouseController))
warehousesRouter.get('/get-all', getListWarehouseValidator, wrapRequestHandler(getListWarehouseController))
warehousesRouter.get('/:id', getWarehouseValidator, wrapRequestHandler(getWarehouseByIdController))
warehousesRouter.put('/:id', updateWarehouseValidator, wrapRequestHandler(updateWarehouseController))
warehousesRouter.delete('/:id', deleteWarehouseValidator, wrapRequestHandler(deleteWarehouseController))

export default warehousesRouter
