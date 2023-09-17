import { Injectable } from '@nestjs/common';
import { CreateProcdureDto } from './dto/create-procdure.dto';
import { UpdateProcdureDto } from './dto/update-procdure.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProcduresService {
  constructor(private prisma: PrismaService) {}

  create(createProcdureDto: CreateProcdureDto) {
    return this.prisma.procdure.create({ data: createProcdureDto });
  }

  findAll() {
    return this.prisma.procdure.findMany();
  }

  async findOne(id: number) {
    return this.prisma.procdure.findUnique({ where: { id } });
  }

  update(id: number, updateProcdureDto: UpdateProcdureDto) {
    return this.prisma.procdure.update({
      where: { id },
      data: updateProcdureDto,
    });
  }

  remove(id: number) {
    return this.prisma.procdure.delete({ where: { id } });
  }
}
