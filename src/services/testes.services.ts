
import { Injectable } from '@nestjs/common';
import prisma from '../services/prisma';
import { TestDto } from '../dtos/teste-dto';



@Injectable()
export class TesteService {

    constructor() {
        // prisma.$connect();
    }

    async getHello(): Promise<string> {
        return 'Hello World!';
    }
0
    async realizarTeste(): Promise<TestDto[]> {
        const testes: TestDto[] = await prisma.teste.findMany() ;
        return testes;
    }
}