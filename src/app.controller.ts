import { PrismaService } from './services/prisma.services';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ZodValidatePipe } from './pipes/zod-Validate-pipe';
import { TestDto, testedto } from './dtos/teste-dto';
import { UsePipes } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHello() {
    // return this.appService.getHello();
    const restult =  await this.prismaService.realizarTeste();
    return restult;
  }

  @Post()
  @UsePipes(new ZodValidatePipe(testedto))
  async createTeste(@Body() body: TestDto ) {
    // return this.appService.getHello();
    const restult =  await this.prismaService.realizarTeste();
 
  }
}
