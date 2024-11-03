export declare class UserController {
    find(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
    };
    create(): {
        message: string;
    };
    update(id: string): {
        message: string;
    };
    delete(): {
        message: string;
    };
}
