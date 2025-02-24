import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StagesService {
  constructor(private prisma: PrismaService) {}

  async create(createStageDto: CreateStageDto) {
    return await this.prisma.stage.create({ data: { ...createStageDto } });
  }

  async findAll() {
    return await this.prisma.stage.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.stage.findUnique({ where: { id } });
  }

  async update(id: string, updateStageDto: UpdateStageDto) {
    return await this.prisma.stage.update({
      where: { id },
      data: { ...updateStageDto, updatedAt: new Date() },
    });
  }
}
