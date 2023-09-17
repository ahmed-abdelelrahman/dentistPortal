import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  paymentName: string;
}
