import 'dotenv/config';
import { PrismaClient } from "../../generated/prisma/client";
import { afterAll,beforeAll } from 'vitest';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env["DATABASE_URL"];
if (!connectionString) {
    throw new Error("TESTE_DATABASE_URL environment variable is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

beforeAll(async () => {
    console.log(' *** +> Iniciando testes de integração...');
    prisma.$connect;
});

afterAll(async () => {
    console.log(' *** +> Finalizando testes de integração...');
    prisma.$disconnect;
});