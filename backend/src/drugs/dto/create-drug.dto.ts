import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateDrugDto {
  @IsString()
  @MinLength(1)
  @ApiProperty()
  generics: string;

  @IsString()
  @ApiProperty()
  brands: string;

  @IsString()
  @ApiProperty()
  dosages: string;
}
