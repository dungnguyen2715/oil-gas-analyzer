import { Router } from 'express'
import { PermissionController } from '../controllers/permissions.controller'

const permissionRouter = Router()
const permissionController = new PermissionController()

permissionRouter.post('/', permissionController.createPermission.bind(permissionController))
permissionRouter.get('/', permissionController.getAllPermissions.bind(permissionController))
permissionRouter.get('/:key', permissionController.getPermissionByKey.bind(permissionController))
permissionRouter.put('/:key', permissionController.updatePermission.bind(permissionController))
permissionRouter.delete('/:key', permissionController.deletePermission.bind(permissionController))
permissionRouter.post('/bulk', permissionController.bulkCreatePermissions.bind(permissionController))

export default permissionRouter
