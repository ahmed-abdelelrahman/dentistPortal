import { Injectable } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InsuranceService {
  constructor(private prisma: PrismaService) {}
  create(createInsuranceDto: CreateInsuranceDto) {
    return this.prisma.insurance.create({
      data: createInsuranceDto,
    });
  }

  findAll() {
    return this.prisma.insurance.findMany();
  }

  async findOne(id: number) {
    return this.prisma.insurance.findUnique({ where: { id } });
  }

  update(id: number, updateInsuranceDto: UpdateInsuranceDto) {
    console.log('Updating insurance with ID:', id);
    console.log('Update data:', updateInsuranceDto);
    return this.prisma.insurance.update({
      where: { id },
      data: updateInsuranceDto,
    });
  }

  remove(id: number) {
    return this.prisma.insurance.delete({ where: { id } });
  }
}
