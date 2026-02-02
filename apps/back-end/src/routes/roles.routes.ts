// src/roles/role.route.ts
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

// Create role
router.post('/', createRoleValidator, wrapRequestHandler(roleController.createRole.bind(roleController)))

// Get all roles
router.get('/', wrapRequestHandler(roleController.getAllRoles.bind(roleController)))

// Get role by name
router.get('/:name', getRoleByNameValidator, wrapRequestHandler(roleController.getRoleByName.bind(roleController)))

// Update role
router.put('/:role', updateRoleValidator, wrapRequestHandler(roleController.updateRole.bind(roleController)))

// Delete role
router.delete('/:name', deleteRoleValidator, wrapRequestHandler(roleController.deleteRole.bind(roleController)))

export default router
