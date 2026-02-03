import express from 'express'
import { config } from 'dotenv'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import warehousesRouter from './routes/warehouses.route'

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
<<<<<<< HEAD
=======
app.use('/roles', roleRouter)
app.use('/permissions', permissionRouter)
app.use('/warehouses', warehousesRouter)
>>>>>>> a5be5b3818ab6a28379eb87e78938e16b29335ae
app.use(defaultErrorHandler)
