import { Request, Response, NextFunction } from 'express'
import * as taskService from '../services/taskService'

export const getTasks = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getTasks()
    res.json(tasks)
  } catch (err) {
    next(err)
  }
}

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    const task = await taskService.getTaskById(id)

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    res.json(task)
  } catch (err) {
    next(err)
  }
}

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description, userId } = req.body
    const task = await taskService.createTask(description, userId)
    res.status(201).json(task)
  } catch (err) {
    next(err)
  }
}

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    const { description, concluded } = req.body
    const task = await taskService.updateTask(id, { description, concluded })
    res.json(task)
  } catch (err) {
    next(err)
  }
}

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id)
    await taskService.deleteTask(id)
    res.status(204).send() // sem conteúdo
  } catch (err) {
    next(err)
  }
}
