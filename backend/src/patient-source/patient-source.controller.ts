import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  NotFoundException,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { PatientSourceService } from './patient-source.service';
import { CreatePatientSourceDto } from './dto/create-patient-source.dto';
import { UpdatePatientSourceDto } from './dto/update-patient-source.dto';
import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { PatientSourceEntity } from './entities/patient-source.entity';

@Controller('patientSource')
@ApiTags('patientSource')
@UseFilters(PrismaClientExpceptionFilter)
export class PatientSourceController {
  constructor(private readonly patientSourceService: PatientSourceService) {}

  @Post()
  @ApiAcceptedResponse({ type: PatientSourceEntity })
  create(@Body() createPatientSourceDto: CreatePatientSourceDto) {
    return this.patientSourceService.create(createPatientSourceDto);
  }

  @Get()
  @ApiAcceptedResponse({ type: PatientSourceEntity, isArray: true })
  findAll() {
    return this.patientSourceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const patientSource = await this.patientSourceService.findOne(+id);
    if (!patientSource) {
      throw new NotFoundException(`patientSource with id ${id} not found `);
    }
    return patientSource;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePatientSourceDto: UpdatePatientSourceDto,
  ) {
    return this.patientSourceService.update(+id, updatePatientSourceDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.patientSourceService.remove(+id);
  }
}
