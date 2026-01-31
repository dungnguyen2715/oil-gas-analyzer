// src/roles/role.model.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IRole extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  permissions: string[]
  description: string
  created_at: Date
  updated_at: Date
  sync_status: string
}

const roleSchema = new Schema<IRole>(
  {
    name: {
      type: String,
      required: [true, 'Role name is required'],
      unique: true,
      trim: true,
      minlength: [2, 'Role name must be at least 2 characters'],
      maxlength: [50, 'Role name cannot exceed 50 characters']
    },
    permissions: {
      type: [String],
      required: true,
      default: []
      // Removed validator - will validate in service layer against database
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    sync_status: {
      type: String,
      enum: ['synced', 'pending'],
      default: 'synced'
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
  }
)

// Indexes for performance
roleSchema.index({ name: 1 })
roleSchema.index({ sync_status: 1 })
roleSchema.index({ created_at: -1 })

// Pre-save hook: Convert name to lowercase for consistency
roleSchema.pre('save', async function () {
  if (this.isModified('name')) {
    this.name = this.name.toLowerCase()
  }

  // Normalize permission codes to lowercase
  if (this.isModified('permissions')) {
    this.permissions = this.permissions.map((p) => p.toLowerCase())
  }
})

export const RoleModel = mongoose.model<IRole>('Role', roleSchema)
