import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseIntPipe,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { InsuracneEntity } from './entities/insurance.entity';

@Controller('insurance')
@ApiTags('insurance')
@UseFilters(PrismaClientExpceptionFilter)
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Post()
  @ApiCreatedResponse({ type: InsuracneEntity })
  create(@Body() createInsuranceDto: CreateInsuranceDto) {
    return this.insuranceService.create(createInsuranceDto);
  }

  @Get()
  @ApiCreatedResponse({ type: InsuracneEntity, isArray: true })
  findAll() {
    return this.insuranceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const insurance = await this.insuranceService.findOne(+id);
    if (!insurance) {
      throw new NotFoundException(`insurance with id ${id} not found `);
    }
    return insurance;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInsuranceDto: UpdateInsuranceDto,
  ) {
    return this.insuranceService.update(+id, updateInsuranceDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.insuranceService.remove(+id);
  }
}
