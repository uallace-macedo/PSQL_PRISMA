import { PrismaClient } from '@prisma/client';

const globalPrisma = globalThis;
const prisma = globalPrisma.prisma || new PrismaClient();

export default prisma;