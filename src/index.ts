import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { logger } from './middlewares/logger'
import { errorHandler } from './middlewares/errorHandler'
import userRoutes from './routes/userRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.get('/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' })
})

app.use(logger)
app.use('/users', userRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
