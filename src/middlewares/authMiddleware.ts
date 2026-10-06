import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const __dirname = import.meta.dirname
dotenv.config({ path: __dirname + "../../../.env"})
const jwtSecret = process.env.JWT_SECRET as jwt.Secret

if(!jwtSecret) {
    throw new Error("JWT secret code is not set")
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token
    if (!token) {

        return res.redirect("/user/login")
    }

    try {
        const user = jwt.verify(token, jwtSecret)
        req.user = user
        console.log(user)
        return next()
    } catch {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}