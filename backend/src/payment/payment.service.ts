import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}
  create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({ data: createPaymentDto });
  }

  findAll() {
    return this.prisma.payment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: updatePaymentDto,
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
