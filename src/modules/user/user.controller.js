import * as UserService from './user.service.js';
import asyncHandler from '../../app/utils/async_handler.util.js';
import { BadRequest, NotFound } from '../../app/utils/error.util.js';

export const getUsers = asyncHandler (async (req, res) => {
  const users = await UserService.getAllUsers();
  res.status(200).json({
    success: true,
    users
  });
});

export const getUserById = asyncHandler (async (req, res) => {
  const { id } = req.params;
  if(!id) throw BadRequest('Por favor, forneça um ID válido!');

  const user = await UserService.getUserById(parseInt(id));
  if(!user) throw NotFound('Usuário não encontrado!');

  res.status(200).json({
    success: true,
    user
  })
});

export const createUser = asyncHandler (async (req, res) => {
  const { nome, sobrenome, idade } = req.body;
  if(!nome || !idade) throw BadRequest('"Nome" e "Idade" são obrigatórios!');

  const data = {
    nome, idade,
    ...(sobrenome && { sobrenome })
  };

  const user = await UserService.createUser(data);
  res.status(201).json({
    success: true,
    user
  });
});

export const updateUser = asyncHandler (async (req, res) => {
  const { id } = req.params;
  if(!id) throw BadRequest('Por favor, forneça um ID válido!');

  const userId = parseInt(id);
  const user = await UserService.getUserById(userId);
  if(!user) throw NotFound('Usuário não encontrado!');

  const { nome, sobrenome, idade } = req.body;
  const fields = { nome, sobrenome, idade };
  const data = Object.fromEntries(
    Object.entries(fields)
      .filter(([_, value]) => 
        value !== undefined
        && value !== ''
        && value !== 0
    )
  );

  const updatedUser = await UserService.updateUser(userId, data);
  res.status(200).json({
    success: true,
    updatedUser
  });
});

export const deleteUser = asyncHandler (async (req, res) => {
  const { id } = req.params;
  if(!id) throw BadRequest('Por favor, forneça um ID válido!');

  const userId = parseInt(id);
  const user = await UserService.deleteUser(userId);
  res.status(200).json({
    success: true,
    user
  });
});