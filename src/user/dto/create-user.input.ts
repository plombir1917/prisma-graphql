import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field({ nullable: true, defaultValue: false })
  isActive?: boolean;
}
