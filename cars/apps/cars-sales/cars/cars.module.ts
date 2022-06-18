import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [CarsService, CarsResolver],
})
export class CarsModule {}
