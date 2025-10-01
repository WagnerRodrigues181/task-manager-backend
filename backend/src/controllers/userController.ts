import { Request, Response, NextFunction } from 'express'
import * as userService from '../services/userService'

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getUsers()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    const user = await userService.getUsersById(id)
    if (!user)
      return res.status(400).json({ message: 'Usuário não encontrado' })
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body
    const user = await userService.createUser(name, email, password)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body
    const result = await userService.loginUser(email, password)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    const { name, email } = req.body
    const updatedUser = await userService.updateUser(id, name, email)

    res.json({
      message: 'Usuário atualizado com sucesso',
      user: updatedUser
    })
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    await userService.deleteUser(id)

    res.status(200).json({ message: 'Usuário deletado com sucesso' })
  } catch (err) {
    next(err)
  }
}
