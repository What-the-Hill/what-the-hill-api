import { Module } from '@nestjs/common';
import { StagesService } from './stages.service';
import { StagesController } from './stages.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StagesController],
  providers: [PrismaService, StagesService],
})
export class StagesModule {}
