import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class StagesService {
  constructor(private prisma: PrismaService) {}

  async create(createStageDto: CreateStageDto, user: User) {
    return await this.prisma.stage.create({
      data: { ...createStageDto, updatedBy: user.id },
    });
  }

  async findAll() {
    return await this.prisma.stage.findMany({
      include: { _count: { select: { Bill: true } } },
    });
  }

  async findOne(id: string) {
    return await this.prisma.stage.findUnique({
      where: { id },
      include: { _count: { select: { Bill: true } } },
    });
  }

  async update(id: string, updateStageDto: UpdateStageDto, user: User) {
    return await this.prisma.stage.update({
      where: { id },
      data: { ...updateStageDto, updatedAt: new Date(), updatedBy: user.id },
    });
  }
}
