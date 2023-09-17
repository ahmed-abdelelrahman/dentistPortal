import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseFilters,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProcduresService } from './procdures.service';
import { CreateProcdureDto } from './dto/create-procdure.dto';
import { UpdateProcdureDto } from './dto/update-procdure.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ProcdureEntity } from './entities/procdure.entity';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';

@Controller('procdures')
@ApiTags('procdures')
@UseFilters(PrismaClientExpceptionFilter)
export class ProcduresController {
  constructor(private readonly procduresService: ProcduresService) {}

  @Post()
  @ApiCreatedResponse({ type: ProcdureEntity })
  create(@Body() createProcdureDto: CreateProcdureDto) {
    return this.procduresService.create(createProcdureDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ProcdureEntity, isArray: true })
  findAll() {
    return this.procduresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const procdures = await this.procduresService.findOne(+id);
    if (!procdures) {
      throw new NotFoundException(`procdures with id ${id} not found `);
    }
    return procdures;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProcdureDto: UpdateProcdureDto,
  ) {
    return this.procduresService.update(+id, updateProcdureDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.procduresService.remove(+id);
  }
}
