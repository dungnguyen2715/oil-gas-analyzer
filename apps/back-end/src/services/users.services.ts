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
}

const usersServices = new UsersServices()
export default usersServices
