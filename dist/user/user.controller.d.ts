import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user.response.dto';
import { UserEntity } from './user.entity';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    private users;
    create(createUserDto: CreateUserDto): UserResponseDto;
    find(request: Request): Promise<UserResponseDto[]>;
    findOne(id: string): UserResponseDto;
    update(id: string, updateUserDto: UpdateUserDto): UserEntity;
    delete(id: string): void;
}
