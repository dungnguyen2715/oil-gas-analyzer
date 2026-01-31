import { ObjectId } from 'mongodb'
import { UserModel } from '~/models/schemas/User.schema'
import { CreateUserReqBody } from '~/models/requests/Users.requests'
import { hashPassword } from '~/utils/crypto'

class UsersServices {
  // Kiểm tra email tồn tại
  async isEmailExisted(email: string) {
    const user = await UserModel.findOne({ email })
    return Boolean(user)
  }

  // Tạo User mới với các field: full_name, phone, email, password
  async create(payload: CreateUserReqBody) {
    const { full_name, email, password, phone } = payload
    const user_id = new ObjectId()

    // Sử dụng Mongoose để tạo document
    const newUser = new UserModel({
      _id: user_id,
      email,
      full_name,
      phone,
      password: hashPassword(password),
      // Tự sinh username dựa trên ID nếu người dùng không nhập
      username: `user_${user_id.toString()}`,
      status: 'active'
    })

    // Lưu vào database
    const result = await newUser.save()

    // Trả về dữ liệu sạch (loại bỏ password)
    const userResponse = result.toObject()
    delete (userResponse as any).password

    return userResponse
  }

  async getListUser(query: { page?: string; limit?: string; role?: string; status?: string }) {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit

    const filter: any = {}
    if (query.role) filter.role_id = query.role
    if (query.status) filter.status = query.status

    // Thực hiện truy vấn song song: Lấy data và Đếm tổng số lượng
    const [users, total] = await Promise.all([
      UserModel.find(filter)
        .select('full_name email role_id status _id') // Chỉ lấy metadata cần thiết
        .sort({ full_name: 1 }) // Sắp xếp theo tên (A-Z) theo Acceptance Criteria
        .skip(skip)
        .limit(limit)
        .lean(), // Tăng hiệu suất bằng cách trả về plain object
      UserModel.countDocuments(filter)
    ])

    return {
      users,
      total,
      page,
      limit,
      total_pages: Math.ceil(total / limit)
    }
  }
}

const usersServices = new UsersServices()
export default usersServices
