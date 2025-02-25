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
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createStatusDto: CreateStatusDto, @Req() req: Request) {
    return this.statusesService.create(createStatusDto, req.user as User);
  }

  @Get()
  findAll() {
    return this.statusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
    @Req() req: Request,
  ) {
    return this.statusesService.update(id, updateStatusDto, req.user as User);
  }
}
