import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client/extension';
import { TesteService } from './services/testes.services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,TesteService],
})
export class AppModule {}
