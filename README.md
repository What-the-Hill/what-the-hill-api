# What The Hill API

API layer for the "What The Hill" project.

## Local Development

Tools:

- node/npm/nvm
- Prisma
- Postgresql
- NestJS
- Docker

`npm install`

`npm install -g @nestjs/cli`

`docker compose up -d`

`cp .env.template .env`

Edit environment variables in `.env` to match `docker-compose.yml` if you made changes

`npx prisma db push` to initialize fresh db

`npm run start:dev`

## Nest CLI

To create a resource with CRUD operators

`nest g resource my-resource-name`

## DB Migrations

Make changes to `prisma/schema.prisma`, then

`npx prisma db push`

Once changes are complete, create migration file by

`npx prisma migrate dev --name my_migration_name`

## Deployment

`npx prisma migrate deploy`
