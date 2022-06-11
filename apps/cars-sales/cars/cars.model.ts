import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field((type) => String, { nullable: true })
  plate: string;

  @Field((type) => String, { nullable: true })
  chassi: string;

  @Field((type) => String, { nullable: true })
  price: number;
}
