import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const __dirname = import.meta.dirname;
dotenv.config({ path: __dirname + "../../../.env" });
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    throw new Error("JWT secret code is not set");
}
export const verifyMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log('нет токена');
        return next();
    }
    try {
        const user = jwt.verify(token, jwtSecret);
        req.user = user;
        console.log(user);
        return next();
    }
    catch {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};
//# sourceMappingURL=verifyMiddleware.js.map