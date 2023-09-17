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
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExpceptionFilter } from '../prisma-client-expception/prisma-client-expception.filter';
import { PaymentEntity } from './entities/payment.entity';

@Controller('payment')
@ApiTags('payment')
@UseFilters(PrismaClientExpceptionFilter)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiCreatedResponse({ type: PaymentEntity })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  @ApiCreatedResponse({ type: PaymentEntity, isArray: true })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const payment = await this.paymentService.findOne(+id);
    if (!payment) {
      throw new NotFoundException(`payment with name ${id} not found `);
    }
    return payment;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePatientSourceDto: UpdatePaymentDto,
  ) {
    return this.paymentService.update(+id, updatePatientSourceDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.remove(+id);
  }
}
