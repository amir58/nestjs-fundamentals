import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }

  id: string;
  username: string;
  email: string;

  @Expose({ name: 'Country' })
  country: string;

  // @Expose({ name: 'Country' })
  // getCountry() {
  //   return this.country;
  // }
  @Exclude()
  password: string;
}
