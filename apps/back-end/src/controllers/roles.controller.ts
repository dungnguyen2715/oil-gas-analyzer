// src/roles/role.controller.ts
import { Request, Response } from 'express'
import { RoleService, CreateRoleDto, UpdateRoleDto } from '../services/roles.service'

const roleService = new RoleService()
interface RoleFilter {
  name?: string
  sync_status?: string
  page?: number
  limit?: number
}

export class RoleController {
  /**
   * POST /api/roles - Create new role
   */
  async createRole(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateRoleDto = req.body

      // Validation
      if (!data.name || !data.permissions || !data.description) {
        res.status(400).json({
          success: false,
          message: 'Missing required fields: name, permissions, description'
        })
        return
      }

      if (!Array.isArray(data.permissions) || data.permissions.length === 0) {
        res.status(400).json({
          success: false,
          message: 'Permissions must be a non-empty array'
        })
        return
      }

      const role = await roleService.createRole(data)

      res.status(201).json({
        success: true,
        message: 'Role created successfully',
        data: role
      })
    } catch (error: unknown) {
      console.error('Error creating role:', error)

      let message = 'Failed to create role'

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
   * GET /api/roles/:id - Get role by ID
   */
  async getRoleById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params as { id: string }
      const role = await roleService.getRoleById(id)

      if (!role) {
        res.status(404).json({
          success: false,
          message: 'Role not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        data: role
      })
    } catch (error: unknown) {
      console.error('Error getting role:', error)

      let message = 'Failed to get role'

      if (error instanceof Error) {
        message = error.message
      }

      res.status(400).json({
        success: false,
        message: message
      })
    }
  }

  /**
   * GET /api/roles - Get all roles with filters and pagination
   */
  async getAllRoles(req: Request, res: Response): Promise<void> {
    try {
      const { name, sync_status, page, limit } = req.query

      const filters: RoleFilter = {}
      if (name) filters.name = name as string
      if (sync_status) filters.sync_status = sync_status as string
      if (page) filters.page = parseInt(page as string)
      if (limit) filters.limit = parseInt(limit as string)

      const result = await roleService.getAllRoles(filters)

      res.status(200).json({
        success: true,
        data: result.roles,
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: Math.ceil(result.total / result.limit)
        }
      })
    } catch (error: unknown) {
      console.error('Error getting roles:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to get roles'
      })
    }
  }

  /**
   * PUT /api/roles/:id - Update role
   */
  async updateRole(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params as { id: string }
      const data: UpdateRoleDto = req.body

      // Validate at least one field is provided
      if (!data.name && !data.permissions && !data.description) {
        res.status(400).json({
          success: false,
          message: 'At least one field (name, permissions, description) must be provided'
        })
        return
      }

      // Validate permissions if provided
      if (data.permissions !== undefined) {
        if (!Array.isArray(data.permissions) || data.permissions.length === 0) {
          res.status(400).json({
            success: false,
            message: 'Permissions must be a non-empty array'
          })
          return
        }
      }

      const role = await roleService.updateRole(id, data)

      if (!role) {
        res.status(404).json({
          success: false,
          message: 'Role not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Role updated successfully',
        data: role
      })
    } catch (error: unknown) {
      console.error('Error updating role:', error)

      let message = 'Failed to update role'

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
   * DELETE /api/roles/:id - Delete role
   */
  async deleteRole(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params as { id: string }
      const deleted = await roleService.deleteRole(id)

      if (!deleted) {
        res.status(404).json({
          success: false,
          message: 'Role not found'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'Role deleted successfully'
      })
    } catch (error: unknown) {
      console.error('Error deleting role:', error)

      let message = 'Failed to delete role'

      if (error instanceof Error) {
        message = error.message
      }

      res.status(500).json({
        success: false,
        message: message
      })
    }
  }
}
