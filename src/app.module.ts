import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RootModule } from './modules/root/root.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RootModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
