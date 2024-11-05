import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  readonly username: string;

  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    },
  )
  readonly email: string;

  @IsString()
  readonly country: string;

  // No business logic
}
