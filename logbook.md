# 🐘 PSQL_PRISMA

## 📚 Sumário

- [🚀 Inicialização](#inicialização)
- [📦 Models](#models)
  - [📘 Tipos](#tipos)
  - [🔧 Tipos derivados - Comportamento](#tipos-derivados---comportamento)
  - [🎨 Tipos personalizados - Enum](#tipos-personalizados---enum)
  - [🔗 Relacionamentos](#relacionamentos)
- [🛠️ Comandos úteis](#comandos-úteis)
- [🧩 Manipulação do banco](#manipulação-do-banco)
  - [📄 Básico](#básico)
  - [🔍 Buscas avançadas](#buscas-avançadas)
  - [🔗 Relações](#relações)

---

## 🚀 Inicialização
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

## 📦 Models
Os models são criados no `prisma/schema.prisma`

### 📘 Tipos

| Tipo Prisma | Descrição                 | Equivalência SQL          |
|-------------|---------------------------|---------------------------|
| `String`    | Texto                     | `VARCHAR`, `TEXT`         |
| `Int`       | Inteiro 32 bits           | `INTEGER`                 |
| `BigInt`    | Inteiro 64 bits           | `BIGINT`                  |
| `Float`     | Número decimal            | `FLOAT`, `REAL`, `DOUBLE` |
| `Decimal`   | Decimal de alta precisão  | `DECIMAL`, `NUMERIC`      |
| `Boolean`   | Valor verdadeiro/falso    | `BOOLEAN`                 |
| `DateTime`  | Data e hora (formato ISO) | `TIMESTAMP`, `DATETIME`   |
| `Json`      | Objeto ou array JSON      | `JSON`, `TEXT`            |
| `Bytes`     | Dados binários            | `BLOB`, `BYTEA`           |
|||

### 🔧 Tipos derivados - Comportamento
- `@id` → chave primária
- `@default()` → valor padrão
- `@unique` → valor único
- `@updatedAt` → atualiza automaticamente
- `?` → campo opcional (nullable)
- `[]` → array (relação ou tipo lista, dependendo do contexto)

### 🎨 Tipos personalizados - Enum
```prisma
enum Role {
  USER
  ADMIN
  MODERATOR
}

model User {
  id   Int   @id @default(autoincrement())
  role Role  @default(USER)
}
```

### 🔗 Relacionamentos
```prisma
model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

model Post {
  id       Int   @id @default(autoincrement())
  userId   Int
  user     User  @relation(fields: [userId], references: [id])
}
```


## 🛠️ Comandos úteis

1. `npx prisma generate`
  Para criar pastas de geração

2. `npx prisma db pull`
  Para buscar as atualizações feitas em seu db para o `schema.prisma`

3. `npx prisma db push`
  Para enviar as atualizações feitas no `schema.prisma` para o db

4. `npx prisma studio`
  Página web para manipulação do banco de dados

## 🧩 Manipulação do banco

### 📄 Básico

```js
// Criação
await prisma.model.create({ data });
await prisma.model.createMany({ data: [] });

// Leitura
await prisma.model.findMany(); // all
await prisma.model.findUnique({ where: {...} });

// Atualização
await prisma.model.update({ where: {...}, data: {...}});

// Deletar
await prisma.model.delete({ where: {...} });

```

### 🔍 Buscas avançadas
```js
// Criação
await prisma.model.create({ data });
await prisma.model.createMany({
  data: [],
  skipDuplicates: true // opcional, ignora duplicatas no campo único
});

// Leitura
await prisma.model.findMany({
  where: {
    name: { contains: "Jo" }
  } 
});

// Atualização
await prisma.user.updateMany({
  where: { name: { contains: "Jo" } },
  data: { name: "Jo Atualizado" },
});

// Deletar
await prisma.user.deleteMany({
  where: {
    email: {
      contains: "@example.com",
    },
  },
});

```

### 🔗 Relações

```prisma
model User {
  id        Int     @id @default(autoincrement())
  name      String
  branchId  Int
  branch    Branch  @relation(fields: [branchId], references: [id])
}

model Branch {
  id    Int    @id @default(autoincrement())
  name  String
  users User[]
}
```

- Cada `Branch` tem muitos `User`'s
- Cada `User` tem um único `Branch`, com chave estrangeira `branchId`

#### Criação com relação
1. **Opção 1**: Associar (`connect`) um branch já existente
  ```js
  await prisma.user.create({
    data: {
      name: "John",
      branch: {
        connect: { id: 1 },
      },
    },
  });
  ```
2. **Opção 2**: Criar o `Branch` **junto** com o `User`
  ```js
  await prisma.user.create({
    data: {
      name: "João",
      branch: {
        create: {
          name: "Filial Norte",
        },
      },
    },
  });
  ```