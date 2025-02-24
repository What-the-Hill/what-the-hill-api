import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async create(createBillDto: CreateBillDto) {
    return await this.prisma.bill.create({ data: { ...createBillDto } });
  }

  async findAll() {
    return await this.prisma.bill.findMany({
      include: {
        sponsor: { select: { name: true } },
        stage: { select: { name: true } },
        status: { select: { name: true, color: true } },
      },
      omit: {
        sponsorId: true,
        stageId: true,
        statusId: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.bill.findUnique({
      where: { id },
      include: { sponsor: true, stage: true, status: true },
    });
  }

  async update(id: string, updateBillDto: UpdateBillDto) {
    return await this.prisma.bill.update({
      where: { id },
      data: { ...updateBillDto, updatedAt: new Date() },
    });
  }
}
