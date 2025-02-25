import { Injectable } from '@nestjs/common';
import { CreateLegislatorDto } from './dto/create-legislator.dto';
import { UpdateLegislatorDto } from './dto/update-legislator.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class LegislatorsService {
  constructor(private prisma: PrismaService) {}

  async create(createLegislatorDto: CreateLegislatorDto, user: User) {
    return await this.prisma.legislator.create({
      data: { ...createLegislatorDto, updatedBy: user.id },
    });
  }

  async findAll() {
    return await this.prisma.legislator.findMany({
      include: { bills: { select: { title: true } } },
    });
  }

  async findOne(id: string) {
    return await this.prisma.legislator.findUnique({
      where: { id },
      include: { bills: true },
    });
  }

  async update(
    id: string,
    updateLegislatorDto: UpdateLegislatorDto,
    user: User,
  ) {
    return await this.prisma.legislator.update({
      where: { id },
      data: {
        ...updateLegislatorDto,
        updatedAt: new Date(),
        updatedBy: user.id,
      },
    });
  }
}
