import { IsEmail, IsString, Length, MinLength } from 'class-validator';

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

  @IsString()
  @MinLength(8)
  readonly password: string;

  // No business logic
}
