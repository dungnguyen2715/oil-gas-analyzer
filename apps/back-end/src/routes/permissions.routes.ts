// src/permissions/permission.route.ts
import { Router } from 'express'
import { PermissionController } from '../controllers/permissions.controller'

const router = Router()
const permissionController = new PermissionController()

router.post('/', permissionController.createPermission.bind(permissionController))
router.get('/', permissionController.getAllPermissions.bind(permissionController))
router.get('/:key', permissionController.getPermissionByKey.bind(permissionController))
router.put('/:key', permissionController.updatePermission.bind(permissionController))
router.delete('/:key', permissionController.deletePermission.bind(permissionController))
router.post('/bulk', permissionController.bulkCreatePermissions.bind(permissionController))

export default router
