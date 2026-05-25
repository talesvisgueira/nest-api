
pnpm i -g @nestjs/cli

nest new 


pnpm i zod
pnpm i vitest
pnpm i -D @vitest/coverage-v8
pnpm i -D @vitest/ui
pnpm i -D supertest

pnpm i -D prisma

pnpm i @prisma/client
pnpm i @prisma/adapter-pg
pnpm i -D @types/pg
pnpm i pg

pnpm prima init                         // cria o diretório prisma com o schema
cd prisma
nano schema.prisma

npx prisma migrate dev --name init      // roda a migrate no banco de dados
npx prisma migrate deploy --name init   // roda as migrate em produção de forma ortimizada
npx prisma generate                     // gera o código do prisma cliente
npx prisma studio                       // abre o visualizador do banco de dados



pnpm i @nestjs/passport @nestjs/jwt
pnpm i -D @swc/cli @swc/core unplugin-swc
pnpm i -D vite-tsconfig-paths