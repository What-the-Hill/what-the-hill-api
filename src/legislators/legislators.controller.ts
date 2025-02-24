import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { LegislatorsService } from './legislators.service';
import { CreateLegislatorDto } from './dto/create-legislator.dto';
import { UpdateLegislatorDto } from './dto/update-legislator.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('legislators')
export class LegislatorsController {
  constructor(private readonly legislatorsService: LegislatorsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createLegislatorDto: CreateLegislatorDto) {
    return this.legislatorsService.create(createLegislatorDto);
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
  ) {
    return this.legislatorsService.update(id, updateLegislatorDto);
  }
}
