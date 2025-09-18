import prisma from '../prisma'

export const getTasks = async (userId: number) => {
  return prisma.task.findMany({
    where: { userId },
    include: { user: true }
  })
}

export const getTaskById = async (id: number, userId: number) => {
  return prisma.task.findFirst({
    where: { id, userId },
    include: { user: true }
  })
}

export const createTask = async (description: string, userId: number) => {
  return prisma.task.create({
    data: { description, concluded: false, userId }
  })
}

export const updateTask = async (
  id: number,
  userId: number,
  data: { description?: string; concluded?: boolean }
) => {
  return prisma.task.updateMany({
    where: { id, userId },
    data
  })
}

export const deleteTask = async (id: number, userId: number) => {
  return prisma.task.deleteMany({
    where: { id, userId }
  })
}
