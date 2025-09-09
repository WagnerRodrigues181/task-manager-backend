import { Request, Response } from 'express'

export const getUsers = (_req: Request, res: Response) => {
  // Por enquanto, só retorno estático
  res.json([{ id: 1, name: 'Admin' }])
}
