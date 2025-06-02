import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getSomething() {
  const vehicle = await prisma.veiculo.findMany();
  console.log(vehicle)
}

getSomething();