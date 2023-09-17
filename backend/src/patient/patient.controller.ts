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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { PatientEntity } from './entities/patient.entity';

@Controller('patients')
@ApiTags('patients')
@UseFilters(PrismaClientExpceptionFilter)
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiCreatedResponse({ type: PatientEntity })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiCreatedResponse({ type: PatientEntity, isArray: true })
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const patients = await this.patientService.findOne(+id);
    if (!patients) {
      throw new NotFoundException(`patients with id ${id} not found `);
    }
    return patients;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.patientService.remove(+id);
  }
}
