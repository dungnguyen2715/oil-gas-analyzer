import { RoleModel, IRole } from '../models/schemas/Role.schema'
import { UserModel } from '../models/schemas/User.schema'
import { PermissionService } from './permission.service'
import mongoose from 'mongoose'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { ROLE_MESSAGES } from '~/constants/messages'

export interface CreateRoleDto {
  name: string
  permissions: string[]
  description?: string
}

export interface UpdateRoleDto {
  name?: string
  permissions?: string[]
  description?: string
}

export interface RoleResponseDto {
  id: string
  name: string
  permissions: string[]
  description: string
  created_at: Date
  updated_at: Date
}

export class RoleService {
  private permissionService: PermissionService

  constructor() {
    this.permissionService = new PermissionService()
  }

  /**
   * Create a new role
   */
  async createRole(data: CreateRoleDto): Promise<RoleResponseDto> {
    // Check if role name already exists (case-insensitive)
    const existingRole = await RoleModel.findOne({
      name: data.name.toLowerCase()
    })

    if (existingRole) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_ALREADY_EXISTS,
        status: HTTP_STATUS.CONFLICT
      })
    }

    // Validate permissions against database
    await this.permissionService.validatePermissions(data.permissions)

    // Create new role
    const role = new RoleModel({
      name: data.name.toLowerCase(),
      permissions: data.permissions.map((p) => p.toLowerCase()),
      description: data.description,
      sync_status: 'synced'
    })

    await role.save()
    return this.toResponseDto(role)
  }

  /**
   * Get role by ID
   */
  async getRoleByName(name: string): Promise<RoleResponseDto> {
    if (!name) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NAME_IS_INVALID,
        status: HTTP_STATUS.BAD_REQUEST
      })
    }

    const role = await RoleModel.findOne({ name: name.toLowerCase() })
    if (!role) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    return this.toResponseDto(role)
  }

  /**
   * Get all roles with optional filters and pagination
   */
  async getAllRoles(filters?: {
    name?: string
    page?: number
    limit?: number
  }): Promise<{ roles: RoleResponseDto[]; total: number; page: number; limit: number }> {
    const query: {
      name?: { $regex: string; $options: string }
      sync_status?: string
    } = {}

    // Apply filters
    if (filters?.name) {
      query.name = { $regex: filters.name, $options: 'i' }
    }

    // Pagination
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const skip = (page - 1) * limit

    // Execute query
    const [roles, total] = await Promise.all([
      RoleModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit),
      RoleModel.countDocuments(query)
    ])

    return {
      roles: roles.map((role) => this.toResponseDto(role)),
      total,
      page,
      limit
    }
  }

  /**
   * Update role by name
   */
  async updateRole(name: string, data: UpdateRoleDto): Promise<RoleResponseDto> {
    if (!name) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NAME_IS_INVALID,
        status: HTTP_STATUS.BAD_REQUEST
      })
    }

    // Check if role exists
    const role = await RoleModel.findOne({ name: name.toLowerCase() })
    if (!role) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }

    if (data.permissions) {
      const userCount = await UserModel.countDocuments({ roles: role._id })
      if (userCount > 0) {
        throw new ErrorWithStatus({
          message: `Cannot update permissions. Role is assigned to ${userCount} users.`,
          status: HTTP_STATUS.FORBIDDEN
        })
      }
    }

    // Check if new name conflicts with existing role
    if (data.name && data.name.toLowerCase() !== role.name) {
      const existingRole = await RoleModel.findOne({
        name: data.name.toLowerCase(),
        _id: { $ne: role._id }
      })

      if (existingRole) {
        throw new ErrorWithStatus({
          message: ROLE_MESSAGES.ROLE_ALREADY_EXISTS,
          status: HTTP_STATUS.CONFLICT
        })
      }
    }

    // Validate permissions if provided
    if (data.permissions) {
      await this.permissionService.validatePermissions(data.permissions)
    }

    // Update fields
    if (data.name) role.name = data.name.toLowerCase()
    if (data.permissions) role.permissions = data.permissions.map((p) => p.toLowerCase())
    if (data.description) role.description = data.description

    role.sync_status = 'pending' // Mark as pending for sync
    await role.save()

    return this.toResponseDto(role)
  }

  /**
   * Delete role by name
   */
  async deleteRole(name: string): Promise<void> {
    if (!name) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NAME_IS_INVALID,
        status: HTTP_STATUS.BAD_REQUEST
      })
    }

    const result = await RoleModel.findOneAndDelete({ name: name.toLowerCase() })
    if (!result) {
      throw new ErrorWithStatus({
        message: ROLE_MESSAGES.ROLE_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
  }

  /**
   * Check if role exists by name
   */
  async roleExists(name: string): Promise<boolean> {
    const role = await RoleModel.findOne({ name: name.toLowerCase() })
    return role !== null
  }

  /**
   * Convert model to response DTO
   */
  private toResponseDto(role: IRole): RoleResponseDto {
    return {
      id: role._id.toString(),
      name: role.name,
      permissions: role.permissions,
      description: role.description,
      created_at: role.created_at,
      updated_at: role.updated_at
    }
  }
}
