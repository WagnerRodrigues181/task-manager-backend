import { Request, Response, NextFunction } from 'express'
import * as taskService from '../services/taskService'

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).userId
    const tasks = await taskService.getTasks(userId)
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
    const userId = (req as any).userId
    const id = Number(req.params.id)

    const task = await taskService.getTaskById(id, userId)

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
    const userId = (req as any).userId
    const { description } = req.body

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
    const userId = (req as any).userId
    const id = Number(req.params.id)
    const { description, concluded } = req.body

    const updated = await taskService.updateTask(id, userId, {
      description,
      concluded
    })

    if (updated.count === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    res.json({ message: 'Tarefa atualizada com sucesso' })
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
    const userId = (req as any).userId
    const id = Number(req.params.id)

    const deleted = await taskService.deleteTask(id, userId)

    if (deleted.count === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    res.status(200).json({ message: 'Tarefa deletada com sucesso' })
  } catch (err) {
    next(err)
  }
}
