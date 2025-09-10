import { Router, Request, Response, NextFunction } from 'express'
import { getUsers, createUser } from '../controllers/userController'

const router = Router()

router.get('/', getUsers)
router.post('/', createUser)

router.get('error', (_req: Request, _res: Response, next: NextFunction) => {
  const err = new Error('Algo deu errado!')
  next(err)
})

export default router
