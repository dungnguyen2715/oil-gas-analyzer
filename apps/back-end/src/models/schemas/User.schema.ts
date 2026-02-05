import { Schema, model } from 'mongoose'
import { ObjectId } from 'mongodb'

// 1. Interface định nghĩa cấu trúc dữ liệu cho TypeScript
interface IUser {
  email: string
  password: string
  username: string
  full_name?: string
  phone?: string
  sex?: string
  department?: string
  image_url?: string
  refresh_token?: string
  role_name?: string
  fail_login_attempts?: number
  status?: string
  email_verify_token?: string
  forgot_password_token?: string
  reset_password_token?: string
}

// 2. Định nghĩa Schema cho Mongoose (Để nó biết tạo collection như thế nào)
const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    full_name: { type: String, default: '' },
    phone: { type: String, default: '' },
    sex: { type: String, default: '' },
    department: { type: String, default: '' },
    image_url: { type: String, default: '' },
    refresh_token: { type: String, default: '' },
    role_name: { type: String, default: 'engineer' },
    fail_login_attempts: { type: Number, default: 0 },
    status: { type: String, default: 'active' },
    email_verify_token: { type: String, default: '' },
    forgot_password_token: { type: String, default: '' },
    reset_password_token: { type: String, default: '' }
  },
  {
    timestamps: true // Tự động tạo created_at và updated_at
  }
)

// 3. Tạo Model từ Schema
export const UserModel = model<IUser>('User', userSchema)
