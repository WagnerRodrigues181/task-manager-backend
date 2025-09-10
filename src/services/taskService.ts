import prisma from '../prisma'

export const getTasks = async () => {
  return prisma.task.findMany({
    include: { user: true }
  })
}

export const getTaskById = async (id: number) => {
  return prisma.task.findUnique({
    where: { id },
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
  data: { description?: string; concluded?: boolean }
) => {
  return prisma.task.update({
    where: { id },
    data
  })
}

export const deleteTask = async (id: number) => {
  return prisma.task.delete({
    where: { id }
  })
}
