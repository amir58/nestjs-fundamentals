import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  findUsers(): UserEntity[] {
    return this.users;
  }

  findUser(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): UserEntity {
    const user: UserEntity = {
      id: uuid(),
      ...createUserDto,
    };

    this.users.push(user);
    return user;
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
function uuid(): string {
  throw new Error('Function not implemented.');
}
