import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user.response.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private users;
    findUsers(): UserResponseDto[];
    findUser(id: string): UserResponseDto;
    createUser(createUserDto: CreateUserDto): UserResponseDto;
    updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity;
    deleteUser(id: string): void;
}
