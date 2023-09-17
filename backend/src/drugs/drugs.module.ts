import { Module } from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { DrugsController } from './drugs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DrugsController],
  providers: [DrugsService],
  imports: [PrismaModule],
})
export class DrugsModule {}
