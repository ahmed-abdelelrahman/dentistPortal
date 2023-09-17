import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseFilters,
  NotFoundException,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DrugEntity } from '../drugs/entities/drug.entity';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('drugs')
@ApiTags('drugs')
@UseFilters(PrismaClientExpceptionFilter)
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Post()
  @ApiCreatedResponse({ type: DrugEntity })
  create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugsService.create(createDrugDto);
  }

  @Get()
  @ApiCreatedResponse({ type: DrugEntity, isArray: true })
  findAll() {
    return this.drugsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const drugs = this.drugsService.findOne(+id);
    if (!drugs) {
      throw new NotFoundException(`drugs with id ${id} not found `);
    }
    return drugs;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDrugDto: UpdateDrugDto,
  ) {
    return this.drugsService.update(+id, updateDrugDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.drugsService.remove(+id);
  }
}
