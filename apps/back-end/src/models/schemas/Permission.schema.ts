import mongoose, { Schema, Document } from 'mongoose'

export interface IPermission extends Document {
  _id: mongoose.Types.ObjectId
  key: string
  name: string
  description: string
  created_at: Date
  updated_at: Date
}

const permissionSchema = new Schema<IPermission>(
  {
    key: {
      type: String,
      required: [true, 'Permission key is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z_]+$/, 'Permission key must contain only lowercase letters and underscores']
    },
    name: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters']
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
  }
)

// Indexes
permissionSchema.index({ key: 1 })

export const PermissionModel = mongoose.model<IPermission>('Permission', permissionSchema)
