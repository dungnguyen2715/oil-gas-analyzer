// src/roles/role.controller.ts
import { Request, Response } from 'express'
import { RoleService, CreateRoleDto, UpdateRoleDto } from '../services/roles.service'
import HTTP_STATUS from '~/constants/httpStatus'
import { ROLE_MESSAGES } from '~/constants/messages'

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
    const data: CreateRoleDto = req.body
    const role = await roleService.createRole(data)

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: ROLE_MESSAGES.CREATE_ROLE_SUCCESS,
      data: role
    })
  }

  /**
   * GET /api/roles/:name - Get role by name
   */
  async getRoleByName(req: Request, res: Response): Promise<void> {
    const { name } = req.params as { name: string }
    const role = await roleService.getRoleByName(name)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: ROLE_MESSAGES.GET_ROLE_SUCCESS,
      data: role
    })
  }

  /**
   * GET /api/roles - Get all roles with filters and pagination
   */
  async getAllRoles(req: Request, res: Response): Promise<void> {
    const { name, sync_status, page, limit } = req.query

    const filters: RoleFilter = {}
    if (name) filters.name = name as string
    if (sync_status) filters.sync_status = sync_status as string
    if (page) filters.page = parseInt(page as string)
    if (limit) filters.limit = parseInt(limit as string)

    const result = await roleService.getAllRoles(filters)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: ROLE_MESSAGES.GET_ALL_ROLES_SUCCESS,
      data: result.roles,
      pagination: {
        total: result.total,
        page: result.page,
        limit: result.limit,
        totalPages: Math.ceil(result.total / result.limit)
      }
    })
  }

  /**
   * PUT /api/roles/:role - Update role
   */
  async updateRole(req: Request, res: Response): Promise<void> {
    const { role } = req.params as { role: string }
    const data: UpdateRoleDto = req.body

    const updatedRole = await roleService.updateRole(role, data)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: ROLE_MESSAGES.UPDATE_ROLE_SUCCESS,
      data: updatedRole
    })
  }

  /**
   * DELETE /api/roles/:name - Delete role
   */
  async deleteRole(req: Request, res: Response): Promise<void> {
    const { name } = req.params as { name: string }
    await roleService.deleteRole(name)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: ROLE_MESSAGES.DELETE_ROLE_SUCCESS
    })
  }
}
