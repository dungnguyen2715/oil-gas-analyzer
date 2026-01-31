import mongoose, { Connection } from 'mongoose'
import { config } from 'dotenv'
import { UserModel } from '~/models/schemas/User.schema'

config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@oil-gas-analyzer.zhqcpyi.mongodb.net/OilGasDB?retryWrites=true&w=majority`
class DatabaseService {
  private static instance: DatabaseService

  constructor() {
    // Lắng nghe các sự kiện của connection để dễ debug
    mongoose.connection.on('connected', () => console.log('🍃 MongoDB connected'))
    mongoose.connection.on('error', (err) => console.error('❌ MongoDB error:', err))
    mongoose.connection.on('disconnected', () => console.log('⚠️ MongoDB disconnected'))
  }

  async connect() {
    try {
      // Kiểm tra nếu đã kết nối rồi thì không kết nối lại
      if (mongoose.connection.readyState === 1) return

      await mongoose.connect(uri, {
        autoIndex: true // Tự động tạo index từ schema (hữu ích trong dev)
      })

      console.log(' Mongoose đã kết nối thành công tới MongoDB Atlas!')

      // Khởi tạo index thủ công nếu cần (đảm bảo các index phức tạp được tạo)
      await this.runIndexing()
    } catch (error) {
      console.error(' Lỗi kết nối Database:', error)
      // Trong môi trường production, có thể muốn retry hoặc crash app để container restart
      process.exit(1)
    }
  }

  private async runIndexing() {
    try {
      await Promise.all([UserModel.createIndexes()])
      console.log(' Đã kiểm tra và khởi tạo Index cho các Collection.')
    } catch (error) {
      console.error(' Lỗi khởi tạo Index:', error)
    }
  }

  // Getter để lấy instance của connection khi cần
  get db(): Connection {
    return mongoose.connection
  }

  get connectionState() {
    return mongoose.connection.readyState
  }

  // Truy cập trực tiếp Model
  get users() {
    return UserModel
  }
}

const databaseService = new DatabaseService()
export default databaseService
