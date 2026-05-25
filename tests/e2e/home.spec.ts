import { beforeAll, expect, it } from 'vitest';
import  request  from 'supertest';
import { describe } from 'node:test';
import { TesteService  } from '../../src/services/testes.services';
import {TestDto } from '../../src/dtos/teste-dto';

describe('Testes da tela HOME...', () => {

    it('Testar retorno da tela home...', async () => {
        const service = new TesteService();
        const response: TestDto[] = await service.realizarTeste();
        console.log("" + JSON.stringify( response ) );
        expect(response).toEqual(expect.any(Array));

        // const response = await request(app.server).get('/home') ;
        // expect(response.statusCode).toBe(200);
        // expect(response.headers['content-type']).toMatch(/json/);
        // expect(response.body).toEqual({ name: 'Tela home...' });
    });

});