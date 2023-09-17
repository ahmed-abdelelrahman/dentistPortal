import { PartialType } from '@nestjs/swagger';
import { CreateProcdureDto } from './create-procdure.dto';

export class UpdateProcdureDto extends PartialType(CreateProcdureDto) {}
