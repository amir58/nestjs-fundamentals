import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  find() {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Kate Doe',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      id: 1,
      name: 'John Doe',
    };
  }

  @Post()
  create() {
    return {
      message: 'User created',
    };
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return {
      message: 'User updated',
    };
  }

  @Delete(':id')
  delete() {
    return {
      message: 'User deleted',
    };
  }
}
