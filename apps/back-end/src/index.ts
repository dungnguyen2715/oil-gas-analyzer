import express from 'express'
import { config } from 'dotenv'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
import roleRouter from './routes/roles.routes'
// import permissionRouter from './routes/permissions.routes'
import equipmentRouter from './routes/equipment.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import instrumentRouter from '~/routes/instrument.routes'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import warehousesRouter from './routes/warehouses.route'
import permissionRouter from './routes/permissions.routes'

config()

const app = express()
const PORT = process.env.PORT || 4000

const swaggerPath = path.resolve(process.cwd(), 'swagger.yaml')

// Kiểm tra xem file có tồn tại không trước khi đọc để tránh crash server
if (!fs.existsSync(swaggerPath)) {
  console.error(`❌ Không tìm thấy file Swagger tại: ${swaggerPath}`)
} else {
  const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8'))
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument as any))
  console.log('✅ Swagger UI is available at http://localhost:4000/api-docs')
}

// Middleware
app.use(express.json())

databaseService
  .connect()
  .then(() => {
    // Chỉ khi DB sẵn sàng mới bắt đầu lắng nghe request
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('❌ Failed to start server due to DB connection error:', error)
    process.exit(1)
  })

app.use('/users', usersRouter)

app.use('/roles', roleRouter)
app.use('/permissions', permissionRouter)
app.use('/instruments', instrumentRouter)
app.use('/equipments', equipmentRouter)
app.use('/warehouses', warehousesRouter)
app.use(defaultErrorHandler)
