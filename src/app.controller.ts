import { TesteService } from './services/testes.services';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestDto } from './dtos/teste-dto';
import { UsePipes } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly service: TesteService) {}

  @Get()
  async getHello() {
    // return this.appService.getHello();
    const restult =  await this.service.getHello();
    return restult;
  }

  @Post()
  async createTeste(@Body() body: TestDto ) {
    // return this.appService.getHello();
    const restult =  await this.service.realizarTeste();
 
  }
}
