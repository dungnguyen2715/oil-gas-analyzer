import { Request, Response } from 'express'
// import { PermissionService, CreatePermissionDto, UpdatePermissionDto } from '../services/permission.service'
import { PERMISSION_MESSAGES } from '~/constants/messages'
import HTTP_STATUS from '~/constants/httpStatus'
import { CreatePermissionDto, PermissionService, UpdatePermissionDto } from '~/services/permission.service'

const permissionService = new PermissionService()

export class PermissionController {
  async createPermission(req: Request, res: Response): Promise<void> {
    try {
      const data: CreatePermissionDto = req.body

      if (!data.key) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          message: PERMISSION_MESSAGES.KEY_IS_REQUIRED
        })
        return
      }

      const permission = await permissionService.createPermission(data)

      res.status(HTTP_STATUS.CREATED).json({
        success: true,
        message: PERMISSION_MESSAGES.CREATE_PERMISSION_SUCCESS,
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error creating permission:', error)

      let message: string = PERMISSION_MESSAGES.CREATE_PERMISSION_FAILED
      if (error instanceof Error) {
        message = error.message
      }

      const statusCode = message.includes('already exists') ? HTTP_STATUS.CONFLICT : HTTP_STATUS.BAD_REQUEST

      res.status(statusCode).json({
        success: false,
        message: message
      })
    }
  }

  async getAllPermissions(req: Request, res: Response): Promise<void> {
    try {
      const { key, page, limit } = req.query

      const filters: {
        key?: string
        page?: number
        limit?: number
      } = {}

      if (key) filters.key = key as string
      if (page) filters.page = parseInt(page as string)
      if (limit) filters.limit = parseInt(limit as string)

      const result = await permissionService.getAllPermissions(filters)

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: PERMISSION_MESSAGES.GET_ALL_PERMISSIONS_SUCCESS,
        data: result.permissions,
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: Math.ceil(result.total / result.limit)
        }
      })
    } catch (error: unknown) {
      console.error('Error getting permissions:', error)
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: PERMISSION_MESSAGES.GET_ALL_PERMISSIONS_FAILED
      })
    }
  }

  async getPermissionByKey(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const permission = await permissionService.getPermissionByKey(key)

      if (!permission) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          message: PERMISSION_MESSAGES.PERMISSION_NOT_FOUND
        })
        return
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: PERMISSION_MESSAGES.GET_PERMISSION_SUCCESS,
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error getting permission:', error)
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: PERMISSION_MESSAGES.GET_PERMISSION_FAILED
      })
    }
  }

  async updatePermission(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const data: UpdatePermissionDto = req.body

      if (!data.name && !data.description) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          message: PERMISSION_MESSAGES.AT_LEAST_ONE_FIELD_REQUIRED
        })
        return
      }

      const permission = await permissionService.updatePermission(key, data)

      if (!permission) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          message: PERMISSION_MESSAGES.PERMISSION_NOT_FOUND
        })
        return
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: PERMISSION_MESSAGES.UPDATE_PERMISSION_SUCCESS,
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error updating permission:', error)
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: PERMISSION_MESSAGES.UPDATE_PERMISSION_FAILED
      })
    }
  }

  async deletePermission(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const deleted = await permissionService.deletePermission(key)

      if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          message: PERMISSION_MESSAGES.PERMISSION_NOT_FOUND
        })
        return
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: PERMISSION_MESSAGES.DELETE_PERMISSION_SUCCESS
      })
    } catch (error: unknown) {
      console.error('Error deleting permission:', error)
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: PERMISSION_MESSAGES.DELETE_PERMISSION_FAILED
      })
    }
  }

  async bulkCreatePermissions(req: Request, res: Response): Promise<void> {
    try {
      const { permissions } = req.body

      if (!Array.isArray(permissions) || permissions.length === 0) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          message: PERMISSION_MESSAGES.PERMISSIONS_MUST_BE_NON_EMPTY_ARRAY
        })
        return
      }

      const created = await permissionService.bulkCreatePermissions(permissions)

      res.status(HTTP_STATUS.CREATED).json({
        success: true,
        message: `${PERMISSION_MESSAGES.BULK_CREATE_PERMISSION_SUCCESS} - ${created.length} quyền`,
        data: created
      })
    } catch (error: unknown) {
      console.error('Error bulk creating permissions:', error)
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: PERMISSION_MESSAGES.BULK_CREATE_PERMISSION_FAILED
      })
    }
  }
}
