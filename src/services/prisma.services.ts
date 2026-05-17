
import { Injectable } from '@nestjs/common';
import prisma from '../../lib/prisma';
import { z } from 'zod';
import { TestDto } from '../dtos/teste-dto';



@Injectable()
export class PrismaService {

    constructor() {
        // prisma.$connect();
    }
0
    async realizarTeste(): Promise<TestDto[]> {
        const testes: TestDto[] = await prisma.teste.findMany() ;
        return testes;
    }
}