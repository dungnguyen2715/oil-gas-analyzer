// src/permissions/permission.service.ts
import { PermissionModel, IPermission } from '../models/schemas/Permission.schema'

export interface CreatePermissionDto {
  key: string
  name?: string
  description?: string
}

export interface UpdatePermissionDto {
  name?: string
  description?: string
}

export interface PermissionResponseDto {
  id: string
  key: string
  name?: string
  description?: string
  created_at: Date
  updated_at: Date
}

export class PermissionService {
  /**
   * Create a new permission
   */
  async createPermission(data: CreatePermissionDto): Promise<PermissionResponseDto> {
    const existingPermission = await PermissionModel.findOne({ key: data.key })

    if (existingPermission) {
      throw new Error(`Permission with key '${data.key}' already exists`)
    }

    const permission = new PermissionModel({
      key: data.key.toLowerCase(),
      name: data.name || '',
      description: data.description || ''
    })

    await permission.save()
    return this.toResponseDto(permission)
  }

  /**
   * Get all permissions
   */
  async getAllPermissions(filters?: {
    key?: string
    page?: number
    limit?: number
  }): Promise<{ permissions: PermissionResponseDto[]; total: number; page: number; limit: number }> {
    const query: { key?: string } = {}

    if (filters?.key) {
      query.key = filters.key
    }

    const page = filters?.page || 1
    const limit = filters?.limit || 100
    const skip = (page - 1) * limit

    const [permissions, total] = await Promise.all([
      PermissionModel.find(query).sort({ key: 1 }).skip(skip).limit(limit),
      PermissionModel.countDocuments(query)
    ])

    return {
      permissions: permissions.map((p) => this.toResponseDto(p)),
      total,
      page,
      limit
    }
  }

  /**
   * Get permission by key
   */
  async getPermissionByKey(key: string): Promise<PermissionResponseDto | null> {
    const permission = await PermissionModel.findOne({ key: key.toLowerCase() })
    if (!permission) return null
    return this.toResponseDto(permission)
  }

  /**
   * Update permission
   */
  async updatePermission(key: string, data: UpdatePermissionDto): Promise<PermissionResponseDto | null> {
    const permission = await PermissionModel.findOne({ key: key.toLowerCase() })

    if (!permission) return null

    if (data.name !== undefined) permission.name = data.name
    if (data.description !== undefined) permission.description = data.description

    await permission.save()
    return this.toResponseDto(permission)
  }

  /**
   * Delete permission
   */
  async deletePermission(key: string): Promise<boolean> {
    const result = await PermissionModel.findOneAndDelete({ key: key.toLowerCase() })
    return result !== null
  }

  /**
   * Validate permissions array against database
   */
  async validatePermissions(permissionKeys: string[]): Promise<void> {
    if (!Array.isArray(permissionKeys) || permissionKeys.length === 0) {
      throw new Error('Permissions must be a non-empty array')
    }

    const normalizedKeys = permissionKeys.map((key) => key.toLowerCase())
    const validPermissions = await PermissionModel.find({
      key: { $in: normalizedKeys }
    })

    if (validPermissions.length !== normalizedKeys.length) {
      const validKeys = validPermissions.map((p) => p.key)
      const invalidPerms = normalizedKeys.filter((p) => !validKeys.includes(p))
      throw new Error(`Invalid permissions: ${invalidPerms.join(', ')}`)
    }
  }

  /**
   * Get all valid permission keys
   */
  async getValidPermissionKeys(): Promise<string[]> {
    const permissions = await PermissionModel.find({}, 'key')
    return permissions.map((p) => p.key)
  }

  /**
   * Bulk create permissions (useful for seeding)
   */
  async bulkCreatePermissions(permissions: CreatePermissionDto[]): Promise<PermissionResponseDto[]> {
    const created: PermissionResponseDto[] = []

    for (const permData of permissions) {
      try {
        const existing = await PermissionModel.findOne({ key: permData.key })
        if (!existing) {
          const permission = new PermissionModel({
            key: permData.key.toLowerCase(),
            name: permData.name,
            description: permData.description || ''
          })
          await permission.save()
          created.push(this.toResponseDto(permission))
        }
      } catch (error) {
        console.error(`Error creating permission ${permData.key}:`, error)
      }
    }

    return created
  }

  /**
   * Convert model to response DTO
   */
  private toResponseDto(permission: IPermission): PermissionResponseDto {
    return {
      id: permission._id.toString(),
      key: permission.key,
      name: permission.name,
      description: permission.description,
      created_at: permission.created_at,
      updated_at: permission.updated_at
    }
  }
}
