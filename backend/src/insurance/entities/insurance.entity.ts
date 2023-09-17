import { ApiProperty } from '@nestjs/swagger';
import { Insurance } from '@prisma/client';
export class InsuracneEntity implements Insurance {
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  contactNumber: string;
}
