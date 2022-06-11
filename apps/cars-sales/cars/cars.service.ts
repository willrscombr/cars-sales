import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs';
import { CarsController } from './cars.controller';
import { Car } from './cars.model';
import { CarsResolver } from './cars.resolver';

import { randomUUID } from 'crypto';

@Injectable()
export class CarsService {
  list(): Car[] {
    const cars = [];
    const car = new Car();
    car.id = randomUUID();
    car.plate = 'NKR0523';
    car.chassi = '000000000';
    cars.push(car);
    cars.push(car);
    cars.push(car);
    return cars;
  }
  async get(id: string) {
    const car = new Car();
    car.id = randomUUID();
    car.plate = 'NKR0523';
    car.chassi = '000000000';

    return car;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
