import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';
import { PrismaService } from '../database/prisma.service';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntryRepository])],
  controllers: [DatesController],
  providers: [DatesService, PrismaService],
})
export class DatesModule {}
