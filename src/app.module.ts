import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatesModule } from './modules/dates/dates.module';
import { RootModule } from './modules/root/root.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RootModule, DatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
