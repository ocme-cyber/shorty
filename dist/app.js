import express from "express";
import dotenv, { config } from "dotenv";
import userRouter from "./user/user.routes.js";
import urlRouter from "./url/url.router.js";
import cookieParser from "cookie-parser";
import { verifyMiddleware } from "./middlewares/verifyMiddleware.js";
const __dirname = import.meta.dirname;
dotenv.config({ path: `${__dirname}/../.env` });
const PORT = process.env["PORT"];
if (!PORT) {
    throw new Error("PORT environment variable is not set.");
}
const app = express();
app.set("view engine", "ejs");
app.set("views", `${__dirname}/../public`);
app.use(express.static(`${__dirname}/../public`));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET) || 'efngrgtewgfcaefqw');
app.use(verifyMiddleware);
app.use('/', urlRouter);
app.use("/user", userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map