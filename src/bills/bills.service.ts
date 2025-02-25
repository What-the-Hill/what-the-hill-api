import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async create(createBillDto: CreateBillDto, user: User) {
    return await this.prisma.bill.create({
      data: { ...createBillDto, updatedBy: user.id },
    });
  }

  async findAll() {
    return await this.prisma.bill.findMany({
      include: {
        sponsor: { select: { name: true } },
        stage: { select: { name: true } },
        status: { select: { name: true, color: true } },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.bill.findUnique({
      where: { id },
      include: { sponsor: true, stage: true, status: true },
    });
  }

  async update(id: string, updateBillDto: UpdateBillDto, user: User) {
    return await this.prisma.bill.update({
      where: { id },
      data: { ...updateBillDto, updatedAt: new Date(), updatedBy: user.id },
    });
  }
}
