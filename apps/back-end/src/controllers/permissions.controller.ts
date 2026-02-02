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
          message: 'Thiếu trường bắt buộc: key'
        })
        return
      }

      const permission = await permissionService.createPermission(data)

      res.status(201).json({
        success: true,
        message: 'Tạo quyền thành công',
        data: permission
      })
    } catch (error: unknown) {
      console.error('Lỗi tạo quyền: ', error)

      let message = 'Thêm quyền thất bại'
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
        message: 'Lấy danh sách quyền thành công',
        data: result.permissions,
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: Math.ceil(result.total / result.limit)
        }
      })
    } catch (error: unknown) {
      console.error('Lỗi nhận quyền: ', error)
      res.status(500).json({
        success: false,
        message: 'Lấy danh sách quyền thất bại'
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
          message: 'Quyền không tồn tại'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Lấy thông tin quyền thành công',
        data: permission
      })
    } catch (error: unknown) {
      console.error('Lỗi nhận quyền: ', error)
      res.status(500).json({
        success: false,
        message: 'Lấy thông tin quyền thất bại'
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
          message: 'Phải cung cấp ít nhất một trường'
        })
        return
      }

      const permission = await permissionService.updatePermission(key, data)

      if (!permission) {
        res.status(404).json({
          success: false,
          message: 'Quyền không tồn tại'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Cập nhật quyền thành công',
        data: permission
      })
    } catch (error: unknown) {
      console.error('Lỗi cập nhật quyền: ', error)
      res.status(500).json({
        success: false,
        message: 'Cập nhật quyền thất bại'
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
          message: 'Quyền không tồn tại'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Xóa quyền thành công'
      })
    } catch (error: unknown) {
      console.error('Lỗi xóa quyền: ', error)
      res.status(500).json({
        success: false,
        message: 'Xóa quyền thất bại'
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
          message: 'Danh sách quyền phải là mảng không rỗng'
        })
        return
      }

      const created = await permissionService.bulkCreatePermissions(permissions)

      res.status(201).json({
        success: true,
        message: `Tạo thành công ${created.length} quyền`,
        data: created
      })
    } catch (error: unknown) {
      console.error('Lỗi tạo quyền hàng loạt:', error)
      res.status(500).json({
        success: false,
        message: 'Tạo hàng loạt quyền thất bại'
      })
    }
  }
}
