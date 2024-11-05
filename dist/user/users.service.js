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
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    findUsers() {
        return this.users;
    }
    findUser(id) {
        return this.users.find((user) => user.id === id);
    }
    createUser(createUserDto) {
        const user = {
            id: uuid(),
            ...createUserDto,
        };
        this.users.push(user);
        return user;
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
function uuid() {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=users.service.js.map