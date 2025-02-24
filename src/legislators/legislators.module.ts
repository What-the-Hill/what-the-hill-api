import { Module } from '@nestjs/common';
import { LegislatorsService } from './legislators.service';
import { LegislatorsController } from './legislators.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LegislatorsController],
  providers: [PrismaService, LegislatorsService],
})
export class LegislatorsModule {}
