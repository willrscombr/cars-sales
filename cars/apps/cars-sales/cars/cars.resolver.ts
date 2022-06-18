import { Args, Query, Resolver } from '@nestjs/graphql';
import { Car } from './cars.model';
import { CarsService } from './cars.service';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(() => Car)
  async get(@Args('id') id: string): Promise<Car> {
    return await this.carsService.get(id);
  }
  @Query(() => [Car])
  async list() {
    return await this.carsService.list();
  }

  create() {}

  update() {}

  delete() {}
}
