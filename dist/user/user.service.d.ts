import type { User } from "./interfaces/authInterfaces.js";
export declare const loginUser: (loginUser: User) => Promise<string>;
export declare const registerUser: (newUser: User) => Promise<string>;
export declare const getUserFromId: (login: string) => Promise<{
    id: string;
    login: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    urls: {
        id: string;
        originalUrl: string;
        urlCode: string;
        clicks: number;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        shortUrl: string;
    }[];
}>;
//# sourceMappingURL=user.service.d.ts.map