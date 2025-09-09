import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.get('/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
