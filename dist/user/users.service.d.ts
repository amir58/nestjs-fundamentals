import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private users;
    findUsers(): UserEntity[];
    findUser(id: string): UserEntity;
    createUser(createUserDto: CreateUserDto): UserEntity;
    updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity;
    deleteUser(id: string): void;
}
