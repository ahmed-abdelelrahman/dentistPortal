import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: createAppointmentDto });
  }

  findAll() {
    return this.prisma.appointment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.appointment.findUnique({ where: { id } });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id },
      data: updateAppointmentDto,
    });
  }

  remove(id: number) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
