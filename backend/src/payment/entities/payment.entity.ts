import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '@prisma/client';

export class PaymentEntity implements Payment {
  id: number;
  @ApiProperty()
  paymentName: string;
}
