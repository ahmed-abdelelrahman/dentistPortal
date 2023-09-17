import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DrugsService {
  constructor(private prisma: PrismaService) {}

  create(createDrugDto: CreateDrugDto) {
    return this.prisma.drug.create({ data: createDrugDto });
  }

  findAll() {
    return this.prisma.drug.findMany();
  }

  async findOne(id: number) {
    const drug = await this.prisma.drug.findUnique({ where: { id } });
    if (!drug) {
      throw new NotFoundException(`drug with id ${id} not found`);
    }
    return drug;
  }

  update(id: number, updateDrugDto: UpdateDrugDto) {
    return this.prisma.drug.update({
      where: { id },
      data: updateDrugDto,
    });
  }

  remove(id: number) {
    return this.prisma.drug.delete({ where: { id } });
  }
}
