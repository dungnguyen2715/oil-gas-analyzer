import { Router } from 'express'
import { RoleController } from '../controllers/roles.controller'
import {
  createRoleValidator,
  updateRoleValidator,
  getRoleByNameValidator,
  deleteRoleValidator
} from '../middlewares/roles.middleware'
import { wrapRequestHandler } from '~/utils/handlers'

const router = Router()
const roleController = new RoleController()

router.post('/', createRoleValidator, wrapRequestHandler(roleController.createRole.bind(roleController)))
router.get('/', wrapRequestHandler(roleController.getAllRoles.bind(roleController)))
router.get('/:name', getRoleByNameValidator, wrapRequestHandler(roleController.getRoleByName.bind(roleController)))
router.put('/:role', updateRoleValidator, wrapRequestHandler(roleController.updateRole.bind(roleController)))
router.delete('/:id', deleteRoleValidator, wrapRequestHandler(roleController.deleteRole.bind(roleController)))

export default router
