// src/roles/role.route.ts
import { Router } from 'express'
import { RoleController } from '../controllers/roles.controller'

const router = Router()
const roleController = new RoleController()

// Create role
// TODO: Uncomment when authentication is implemented
// router.post('/', requirePermission(Permission.ROLE_CREATE), (req, res) => roleController.createRole(req, res))
router.post('/', (req, res) => roleController.createRole(req, res))

// Get all roles
// router.get('/', requirePermission(Permission.ROLE_GET_ALL), (req, res) => roleController.getAllRoles(req, res))
router.get('/', (req, res) => roleController.getAllRoles(req, res))

// Get role by ID
// router.get('/:id', requirePermission(Permission.ROLE_VIEW), (req, res) => roleController.getRoleById(req, res))
router.get('/:id', (req, res) => roleController.getRoleById(req, res))

// Update role
// router.put('/:id', requirePermission(Permission.ROLE_UPDATE), (req, res) => roleController.updateRole(req, res))
router.put('/:id', (req, res) => roleController.updateRole(req, res))

// Delete role
// router.delete('/:id', requirePermission(Permission.ROLE_DELETE), (req, res) => roleController.deleteRole(req, res))
router.delete('/:id', (req, res) => roleController.deleteRole(req, res))

export default router
