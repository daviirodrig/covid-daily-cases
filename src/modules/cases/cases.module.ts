import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';
import { GetCasesCountController } from './context/getCasesCount/getCasesCount.controller';
import { GetCasesCountService } from './context/getCasesCount/getCasesCount.service';
import { GetCasesCumulativeController } from './context/getCasesCumulative/getCasesCumulative.controller';
import { GetCasesCumulativeService } from './context/getCasesCumulative/getCasesCumulative.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntryRepository])],
  controllers: [GetCasesCountController, GetCasesCumulativeController],
  providers: [GetCasesCountService, GetCasesCumulativeService],
})
export class CasesModule {}
