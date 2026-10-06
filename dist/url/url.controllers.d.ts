import type { Request, Response } from "express";
import type { UrlParams } from "./interfaces/interfaces.js";
export declare const createUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getHomePage: (req: Request, res: Response) => void;
export declare const redirectToOrigins: (req: Request<UrlParams>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=url.controllers.d.ts.map