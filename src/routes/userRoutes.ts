import { Router, Request, Response, NextFunction } from 'express'
import { getUsers } from '../controllers/userController'

const router = Router()

router.get('/', getUsers)

// rota de teste de erro
router.get('/error', (_req: Request, _res: Response, next: NextFunction) => {
  const err = new Error('Algo deu errado de propósito!')
  next(err) // envia o erro pro errorHandler
})

export default router
