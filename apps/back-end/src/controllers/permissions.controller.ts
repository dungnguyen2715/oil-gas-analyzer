// src/permissions/permission.controller.ts
import { Request, Response } from 'express'
import { PermissionService, CreatePermissionDto, UpdatePermissionDto } from '../services/permission.service'

const permissionService = new PermissionService()

export class PermissionController {
  /**
   * POST /api/permissions - Create new permission
   */
  async createPermission(req: Request, res: Response): Promise<void> {
    try {
      const data: CreatePermissionDto = req.body

      if (!data.key) {
        res.status(400).json({
          success: false,
          message: 'Missing required fields: key'
        })
        return
      }

      const permission = await permissionService.createPermission(data)

      res.status(201).json({
        success: true,
        message: 'Permission created successfully',
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error creating permission:', error)

      let message = 'Failed to create permission'
      if (error instanceof Error) {
        message = error.message
      }

      const statusCode = message.includes('already exists') ? 409 : 400

      res.status(statusCode).json({
        success: false,
        message: message
      })
    }
  }

  /**
   * GET /api/permissions - Get all permissions
   */
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

      res.status(200).json({
        success: true,
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
      res.status(500).json({
        success: false,
        message: 'Failed to get permissions'
      })
    }
  }

  /**
   * GET /api/permissions/:key - Get permission by key
   */
  async getPermissionByKey(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const permission = await permissionService.getPermissionByKey(key)

      if (!permission) {
        res.status(404).json({
          success: false,
          message: 'Permission not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error getting permission:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to get permission'
      })
    }
  }

  /**
   * PUT /api/permissions/:key - Update permission
   */
  async updatePermission(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const data: UpdatePermissionDto = req.body

      if (!data.name && !data.description) {
        res.status(400).json({
          success: false,
          message: 'At least one field must be provided'
        })
        return
      }

      const permission = await permissionService.updatePermission(key, data)

      if (!permission) {
        res.status(404).json({
          success: false,
          message: 'Permission not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Permission updated successfully',
        data: permission
      })
    } catch (error: unknown) {
      console.error('Error updating permission:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to update permission'
      })
    }
  }

  /**
   * DELETE /api/permissions/:key - Delete permission
   */
  async deletePermission(req: Request, res: Response): Promise<void> {
    try {
      const { key } = req.params as { key: string }
      const deleted = await permissionService.deletePermission(key)

      if (!deleted) {
        res.status(404).json({
          success: false,
          message: 'Permission not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Permission deleted successfully'
      })
    } catch (error: unknown) {
      console.error('Error deleting permission:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to delete permission'
      })
    }
  }

  /**
   * POST /api/permissions/bulk - Bulk create permissions
   */
  async bulkCreatePermissions(req: Request, res: Response): Promise<void> {
    try {
      const { permissions } = req.body

      if (!Array.isArray(permissions) || permissions.length === 0) {
        res.status(400).json({
          success: false,
          message: 'Permissions must be a non-empty array'
        })
        return
      }

      const created = await permissionService.bulkCreatePermissions(permissions)

      res.status(201).json({
        success: true,
        message: `Successfully created ${created.length} permissions`,
        data: created
      })
    } catch (error: unknown) {
      console.error('Error bulk creating permissions:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to bulk create permissions'
      })
    }
  }
}
