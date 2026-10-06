import type { Url } from "./interfaces/interfaces.js";
export declare const getAllUrls: () => Promise<{
    id: string;
    originalUrl: string;
    urlCode: string;
    clicks: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getUrlsFromUser: (userId: string) => Promise<{
    id: string;
    originalUrl: string;
    urlCode: string;
    clicks: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const createUrl: (url: Url) => Promise<{
    id: string;
    originalUrl: string;
    urlCode: string;
    clicks: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getUrlFromCode: (urlCode: string) => Promise<{
    id: string;
    originalUrl: string;
    urlCode: string;
    clicks: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=url.repository.d.ts.map