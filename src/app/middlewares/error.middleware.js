import { Prisma } from "@prisma/client";
import { NotFound } from "../utils/error.util.js";

export function baseErrorMiddleware(err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message || 'Erro interno no servidor';

  return res.status(status).json({
    success: false,
    message
  });
};

export function prismaErrorMiddleware(err, req, res, next) {
  if(err instanceof Prisma.PrismaClientKnownRequestError) {
    if(err.code === 'P2025') return next(NotFound('Usuário não encontrado!'));
  }

  return next(err);
}