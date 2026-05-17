import prisma from './lib/prisma';
 

async function getTestes() {
    const testes = await prisma.teste.findMany() ;
    console.log(testes);
}

getTestes();