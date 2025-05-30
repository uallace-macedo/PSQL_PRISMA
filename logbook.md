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
4. `Models`
  Configurar os models do projeto no arquivo `schema.prisma`
5. Migração
  ```bash
  npx prisma migrate dev --name nome-migration
  ```