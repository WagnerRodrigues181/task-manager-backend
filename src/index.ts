import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import taskRoutes from './routes/taskRoutes'
import { requestLogger } from './middlewares/logger'
import { errorHandler } from './middlewares/errorHandler'

dotenv.config()

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(requestLogger)

app.get('/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' })
})

app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)

app.get('/force-error', (_req: Request, _res: Response, next) => {
  const err = new Error('Erro proposital para teste do errorHandler')
  next(err)
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running at https://localhost${port}`)
})
