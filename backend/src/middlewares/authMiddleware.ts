import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'shark_secret'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  if (!authHeader)
    return res.status(401).json({ message: 'Token não fornecido' })

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number }
    // guarda o id do user no request
    ;(req as any).userId = payload.userId
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' })
  }
}
