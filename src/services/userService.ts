import prisma from '../prisma'

export const getUsers = async () => {
  return prisma.user.findMany({
    include: { tasks: true }
  })
}

export const getUsersById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    include: { tasks: true }
  })
}

export const createUser = async (name: string, email: string) => {
  return prisma.user.create({
    data: { name, email }
  })
}

export const updateUser = async (id: number, name: string, email: string) => {
  return prisma.user.update({
    where: { id },
    data: { name, email }
  })
}

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id }
  })
}
