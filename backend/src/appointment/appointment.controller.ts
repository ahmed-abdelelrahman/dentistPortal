import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseFilters,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { AppointmentEntity } from './entities/appointment.entity';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('appointment')
@ApiTags('appointment')
@UseFilters(PrismaClientExpceptionFilter)
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @ApiCreatedResponse({ type: AppointmentEntity })
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @ApiCreatedResponse({ type: AppointmentEntity })
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const appointments = await this.appointmentService.findOne(+id);
    if (!appointments) {
      throw new NotFoundException(`appointments with id ${id} not found `);
    }
    return appointments;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentService.remove(+id);
  }
}
