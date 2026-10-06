import type { Request, Response } from "express";
export declare const getLoginPage: (req: Request, res: Response) => void;
export declare const getRegisterPage: (req: Request, res: Response) => void;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserProfile: (req: Request, res: Response) => Promise<void>;
export declare const logOutUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=user.controllers.d.ts.map