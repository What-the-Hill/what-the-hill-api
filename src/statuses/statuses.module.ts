import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StatusesController],
  providers: [PrismaService, StatusesService],
})
export class StatusesModule {}
