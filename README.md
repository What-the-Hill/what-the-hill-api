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

`docker compose -d`

`cp .env.template .env`

Edit environment variables in `.env` to match `docker-compose.yml` if you made changes

`npx prisma migrate dev`

`npm run start:dev`

## DB Migrations

Make changes to `prisma/schema.prisma`, then

`npx prisma db push`

Once changes are complete, create migration file by

`npx prisma migrate dev --name my_migration_name`

## Deployment

`npx prisma migrate deploy`
