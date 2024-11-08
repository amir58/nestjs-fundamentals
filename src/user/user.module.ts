import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './users.service';

export class MockUserService {
  createUser() {
    return 'User created';
  }
  findUsers() {
    return [
      {
        id: '123',
        name: 'Amir',
        email: 'test@test.com',
        country: 'Egypt',
      },
    ];
  }
  findUser() {
    return {
      id: '123',
      name: 'Amir',
      email: 'test@test.com',
      country: 'Egypt',
    };
  }
  updateUser() {
    return 'User updated';
  }
  deleteUser() {
    return 'User deleted';
  }
}

@Module({
  controllers: [UserController],
  providers: [
    // Standard service
    UserService,
    // Mock service
    // {
    //   provide: UserService,
    //   useValue: new MockUserService(),
    // },
  ],
})
export class UserModule {}
