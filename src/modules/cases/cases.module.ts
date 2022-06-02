import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntryRepository])],
  controllers: [CasesController],
  providers: [CasesService],
})
export class CasesModule {}
