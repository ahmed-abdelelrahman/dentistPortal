import { ApiProperty } from '@nestjs/swagger';
import { Drug } from '@prisma/client';
export class DrugEntity implements Drug {
  @ApiProperty()
  id: number;
  @ApiProperty()
  generics: string;
  @ApiProperty()
  brands: string;
  @ApiProperty()
  dosages: string;
}
