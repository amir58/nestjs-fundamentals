import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
  private users: UserEntity[] = [];

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.table(createUserDto);

    const user: UserEntity = {
      id: uuid(),
      ...createUserDto,
    };

    this.users.push(user);
    return user;
  }

  @Get()
  find() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users.find((user) => user.id === id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = { ...this.users[index], ...updateUserDto };

    return this.users[index];
  }

  @Delete(':id')
  //   @HttpCode(204)
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
