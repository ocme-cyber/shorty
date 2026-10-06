import { z } from "zod";
export declare const ReqUrlBodySchema: z.ZodObject<{
    originalUrl: z.ZodURL;
    userId: z.ZodCUID2;
}, z.core.$strip>;
export interface Url {
    originalUrl: string;
    urlCode: string;
    userId: string;
}
export interface UrlParams {
    urlCode: string;
}
export type ReqUrlBody = z.infer<typeof ReqUrlBodySchema>;
//# sourceMappingURL=interfaces.d.ts.map