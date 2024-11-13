import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  SetMetadata,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorators';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user.response.dto';
import { UserEntity } from './user.entity';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private users: UserEntity[] = [];

  @Post()
  create(@Body() createUserDto: CreateUserDto): UserResponseDto {
    return this.userService.createUser(createUserDto);
  }

  @SetMetadata('isPublic', true)
  @Get()
  async find(@Req() request: Request): Promise<UserResponseDto[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(request.body);

    return this.userService.findUsers();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.findUser(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  //   @HttpCode(204)
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseUUIDPipe) id: string) {
    this.userService.deleteUser(id);
  }
}
