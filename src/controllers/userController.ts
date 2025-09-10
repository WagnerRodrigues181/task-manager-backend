// getUsers e createUser, ambos com id e name.
import { Request, Response } from 'express'

export const getUsers = (_req: Request, res: Response) => {
  res.json([{ id: 1, name: 'jusef' }])
}

export const createUser = (_req: Request, res: Response) => {
  res.json([{ id: 2, name: 'chungus' }])
}
