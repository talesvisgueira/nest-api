import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client/extension';
import { PrismaService } from './services/prisma.services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
