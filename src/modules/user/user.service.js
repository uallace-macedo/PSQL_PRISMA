import prisma from '../../app/configs/db.config.js';
import { NotFound } from '../../app/utils/error.util.js';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
}

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id }
  })
}

export const createUser = async (data) => {
  return await prisma.user.create({ data });
}

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id }});
};