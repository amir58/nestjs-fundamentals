import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    private users;
    create(createUserDto: CreateUserDto): UserEntity;
    find(): UserEntity[];
    findOne(id: string): UserEntity;
    update(id: string, updateUserDto: UpdateUserDto): UserEntity;
    delete(id: string): void;
}
