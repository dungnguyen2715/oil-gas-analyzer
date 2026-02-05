import { Router } from 'express'
import {
  createEquipmentController,
  updateEquipmentController,
  deleteEquipmentController,
  getEquipmentDetailController,
  getListEquipmentController
} from '~/controllers/equipment.controller'
import {
  createEquipmentValidator,
  updateEquipmentValidator,
  deleteEquipmentValidator,
  getEquipmentDetailValidator,
  getListEquipmentValidator
} from '~/middlewares/equipment.middleware'
import { wrapRequestHandler } from '~/utils/handlers'

const equipmentRouter = Router()

equipmentRouter.get('/', getListEquipmentValidator, wrapRequestHandler(getListEquipmentController))
equipmentRouter.post('/create', createEquipmentValidator, wrapRequestHandler(createEquipmentController))
equipmentRouter.put('/:id', updateEquipmentValidator, wrapRequestHandler(updateEquipmentController))
equipmentRouter.delete('/:id', deleteEquipmentValidator, wrapRequestHandler(deleteEquipmentController))
equipmentRouter.get('/:id', getEquipmentDetailValidator, wrapRequestHandler(getEquipmentDetailController))

export default equipmentRouter
