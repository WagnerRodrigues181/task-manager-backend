import { Request, Response } from 'express'

const tasks = [
  { id: 1, description: 'nadar', finished: false },
  { id: 2, description: 'correr', finished: false }
]

export const getTasks = (_req: Request, res: Response) => {
  res.json(tasks)
}

export const getTaskById = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const task = tasks.find((task) => task.id === id)

  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' })
  }

  res.json(task)
}
