import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';
import { GetCasesCountController } from './context/getCasesCount/getCasesCount.controller';
import { GetCasesCountService } from './context/getCasesCount/getCasesCount.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntryRepository])],
  controllers: [GetCasesCountController],
  providers: [GetCasesCountService],
})
export class CasesModule {}
