import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateProcdureDto {
  @ApiProperty({ required: true })
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumber()
  amount: number;
}
