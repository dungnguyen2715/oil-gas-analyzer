// src/roles/role.route.ts
import { Router } from 'express'
import { RoleController } from '../controllers/roles.controller'
import {
  createRoleValidator,
  updateRoleValidator,
  getRoleByIdValidator,
  deleteRoleValidator
} from '../middlewares/roles.middleware'
import { wrapRequestHandler } from '~/utils/handlers'

const router = Router()
const roleController = new RoleController()

// Create role
router.post('/', createRoleValidator, wrapRequestHandler(roleController.createRole.bind(roleController)))

// Get all roles
router.get('/', wrapRequestHandler(roleController.getAllRoles.bind(roleController)))

// Get role by ID
router.get('/:id', getRoleByIdValidator, wrapRequestHandler(roleController.getRoleById.bind(roleController)))

// Update role
router.put('/:id', updateRoleValidator, wrapRequestHandler(roleController.updateRole.bind(roleController)))

// Delete role
router.delete('/:id', deleteRoleValidator, wrapRequestHandler(roleController.deleteRole.bind(roleController)))

export default router
