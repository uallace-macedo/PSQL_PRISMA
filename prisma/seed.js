import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const userCount = await prisma.user.count();
  if(userCount > 0) return console.log('Já existem dados no banco!');

  await prisma.user.createMany({
    data: [
      { nome: 'John', sobrenome: 'Doe', idade: 28 },
      { nome: 'Milles', sobrenome: 'Tree', idade: 43 },
    ]
  });
}

main()
  .catch(
    e => {
      console.error(e);
      process.exit(1);
    }
  ).finally(
    async () => prisma.$disconnect()
  );