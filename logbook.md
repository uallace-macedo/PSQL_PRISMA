# 🐘 PSQL_PRISMA

## Esquema Prisma
1. `Instalação`
  ```bash
  yarn add prisma -D
  yarn add @prisma/client
  ```

2. `Inicialização`
  ```bash
  npx prisma init
  ```

3. `Configuração`
  Configurar o `.env` do projeto para possibilitar a conexão com o BD.

4. `Output`
  Remover o `output` do generator client, no arquivo schema.prisma, para usar o `@prisma/client` a partir do `node_modules`

5. `Models`
  Configurar os models do projeto no arquivo `schema.prisma`

6. Migração
  ```bash
  npx prisma migrate dev --name nome-migration
  ```

## Models
Os models são criados no `prisma/schema.prisma`

## Comandos úteis

1. `npx prisma generate`
  Para criar pastas de geração

2. `npx prisma db pull`
  Para buscar as atualizações feitas em seu db para o `schema.prisma`

3. `npx prisma db push`
  Para enviar as atualizações feitas no `schema.prisma` para o db

4. `npx prisma studio`
  Página web para manipulação do banco de dados