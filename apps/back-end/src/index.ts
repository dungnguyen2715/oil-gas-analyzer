import express from 'express'
import { config } from 'dotenv'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
import roleRouter from './routes/roles.routes'
import permissionRouter from './routes/permissions.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'

config()

const app = express()
const PORT = process.env.PORT || 4000

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
app.use(defaultErrorHandler)
