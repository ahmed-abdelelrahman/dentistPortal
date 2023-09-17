import { Module } from '@nestjs/common';
import { ProcduresService } from './procdures.service';
import { ProcduresController } from './procdures.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ProcduresController],
  providers: [ProcduresService],
  imports: [PrismaModule],
})
export class ProcduresModule {}
