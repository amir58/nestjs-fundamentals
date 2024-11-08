import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user.response.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  findUsers(): UserResponseDto[] {
    return this.users.map((user) => new UserResponseDto(user));
  }

  findUser(id: string): UserResponseDto {
    return new UserResponseDto(this.users.find((user) => user.id === id));
  }

  createUser(createUserDto: CreateUserDto): UserResponseDto {
    const user: UserEntity = {
      id: uuid(),
      ...createUserDto,
    };

    this.users.push(user);
    return new UserResponseDto(user);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = { ...this.users[index], ...updateUserDto };

    return this.users[index];
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
