import prisma from '../prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'shark_secret'

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

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  // verifica se já existe
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email já cadastrado')

  // hash da senha
  const hashedPassword = await bcrypt.hash(password, 10)

  return prisma.user.create({
    data: { name, email, password: hashedPassword }
  })
}

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Credenciais inválidas')

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) throw new Error('Credenciais inválidas')

  // gera o token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

  return { token, user }
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
