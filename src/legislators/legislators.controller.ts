import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { LegislatorsService } from './legislators.service';
import { CreateLegislatorDto } from './dto/create-legislator.dto';
import { UpdateLegislatorDto } from './dto/update-legislator.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('legislators')
export class LegislatorsController {
  constructor(private readonly legislatorsService: LegislatorsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createLegislatorDto: CreateLegislatorDto,
    @Req() req: Request,
  ) {
    return this.legislatorsService.create(
      createLegislatorDto,
      req.user as User,
    );
  }

  @Get()
  findAll() {
    return this.legislatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legislatorsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateLegislatorDto: UpdateLegislatorDto,
    @Req() req: Request,
  ) {
    return this.legislatorsService.update(
      id,
      updateLegislatorDto,
      req.user as User,
    );
  }
}
