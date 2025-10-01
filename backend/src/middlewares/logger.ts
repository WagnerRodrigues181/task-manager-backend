import { Request, Response, NextFunction } from 'express'

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const now = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  })
  console.log(`[${now}] ${req.method} ${req.url}`)
  next()
}
