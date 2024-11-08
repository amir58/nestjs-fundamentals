export declare class MockUserService {
    createUser(): string;
    findUsers(): {
        id: string;
        name: string;
        email: string;
        country: string;
    }[];
    findUser(): {
        id: string;
        name: string;
        email: string;
        country: string;
    };
    updateUser(): string;
    deleteUser(): string;
}
export declare class UserModule {
}
