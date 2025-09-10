import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Erro capturado:', err.message)
  res.status(500).json({
    message: 'Algo deu errado no servidor. Tente novamente mais tarde.'
  })
}
