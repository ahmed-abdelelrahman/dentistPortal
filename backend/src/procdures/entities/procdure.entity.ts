import { ApiProperty } from '@nestjs/swagger';
import { Procdure } from '@prisma/client';

export class ProcdureEntity implements Procdure {
  id: number;
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty()
  amount: number;
}
