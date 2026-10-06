import type { User } from "./interfaces/authInterfaces.js";
export declare const getAllUser: () => Promise<{
    id: string;
    login: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getUserByLogin: (login: string) => Promise<({
    urls: {
        id: string;
        originalUrl: string;
        urlCode: string;
        clicks: number;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    login: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
export declare const createUser: (user: User) => Promise<{
    id: string;
    login: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=user.repository.d.ts.map