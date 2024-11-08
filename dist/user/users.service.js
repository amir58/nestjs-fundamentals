"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const user_response_dto_1 = require("./dtos/user.response.dto");
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    findUsers() {
        return this.users.map((user) => new user_response_dto_1.UserResponseDto(user));
    }
    findUser(id) {
        return new user_response_dto_1.UserResponseDto(this.users.find((user) => user.id === id));
    }
    createUser(createUserDto) {
        const user = {
            id: (0, uuid_1.v4)(),
            ...createUserDto,
        };
        this.users.push(user);
        return new user_response_dto_1.UserResponseDto(user);
    }
    updateUser(id, updateUserDto) {
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = { ...this.users[index], ...updateUserDto };
        return this.users[index];
    }
    deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=users.service.js.map