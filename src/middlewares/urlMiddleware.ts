import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const __dirname = import.meta.dirname
dotenv.config({ path: __dirname + "../../../.env"})
const jwtSecret = process.env.JWT_SECRET as jwt.Secret

if(!jwtSecret) {
    throw new Error("JWT secret code is not set")
}

export const urlMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        return next()
    } catch {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}