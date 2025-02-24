import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatusesService {
  constructor(private prisma: PrismaService) {}

  async create(createStatusDto: CreateStatusDto) {
    return await this.prisma.status.create({
      data: {
        ...createStatusDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.status.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.status.findUnique({ where: { id } });
  }

  async update(id: string, updateStatusDto: UpdateStatusDto) {
    return await this.prisma.status.update({
      where: { id },
      data: { ...updateStatusDto, updatedAt: new Date() },
    });
  }
}
