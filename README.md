# DevShowcase API

## Integrantes do grupo

- Alexandra de Castro Sousa
- Cicera Pereira de Abreu
- Elias de Oliveira Cunha Junior

**Disciplina:** Programação Backend  
**Projeto:** Modelagem de domínio, persistência e endpoints básicos.



## Stack

- Node.js
- TypeScript
- Express
- Prisma ORM
- SQLite
- Zod

## Entidades e relacionamentos

- Profile 1:N Project
- Project N:N Technology
- Project 1:N Feedback

A relação N:N entre Project e Technology é implementada pela entidade associativa `ProjectTechnology`.

## Como executar

1. Instale Node.js 22 ou superior.
2. Copie `.env.example` para `.env`.
3. Execute:

```bash
npm install
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

API: `http://localhost:3000`

## Endpoints obrigatórios

- `POST /api/profiles`
- `GET /api/profiles/:id`
- `POST /api/technologies`
- `GET /api/technologies`
- `POST /api/projects`
- `GET /api/projects`

## Exemplos para Postman

### POST /api/profiles

```json
{
  "name": "Alexandra de Castro Sousa",
  "bio": "Estudante de Tecnologia em Sistemas para Internet",
  "email": "alexandra@example.com",
  "githubUrl": "https://github.com/exemplo",
  "linkedinUrl": "https://linkedin.com/in/exemplo"
}
```

### POST /api/technologies

```json
{
  "name": "Node.js"
}
```

Crie também `TypeScript`, `Express` e `Prisma` em requisições separadas.

### POST /api/projects

```json
{
  "title": "DevShowcase API",
  "description": "API REST para gerenciamento de portfólio de desenvolvedores.",
  "repositoryUrl": "https://github.com/exemplo/devshowcase-api",
  "profileId": 1,
  "technologyIds": [1, 2, 3]
}
```

## Teste de validação

Envie um perfil inválido para comprovar a validação:

```json
{
  "name": "",
  "email": "email-invalido"
}
```

A API deverá retornar HTTP 400.
