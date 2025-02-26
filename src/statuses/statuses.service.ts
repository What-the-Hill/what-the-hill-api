import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class StatusesService {
  constructor(private prisma: PrismaService) {}

  async create(createStatusDto: CreateStatusDto, user: User) {
    return await this.prisma.status.create({
      data: {
        ...createStatusDto,
        updatedBy: user.id,
      },
    });
  }

  async findAll() {
    return await this.prisma.status.findMany({
      include: { _count: { select: { Bill: true } } },
    });
  }

  async findOne(id: string) {
    return await this.prisma.status.findUnique({
      where: { id },
      include: { _count: { select: { Bill: true } } },
    });
  }

  async update(id: string, updateStatusDto: UpdateStatusDto, user: User) {
    return await this.prisma.status.update({
      where: { id },
      data: { ...updateStatusDto, updatedAt: new Date(), updatedBy: user.id },
    });
  }
}
