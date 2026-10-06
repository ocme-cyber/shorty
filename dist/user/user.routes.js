import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as userController from "./user.controllers.js";
const userRouter = express.Router();
userRouter.get("/login", userController.getLoginPage);
userRouter.get("/register", userController.getRegisterPage);
userRouter.get("/profile/:userLogin", authMiddleware, userController.getUserProfile);
userRouter.post("/login", userController.loginUser);
userRouter.post("/register", userController.registerUser);
userRouter.post("/logout", userController.logOutUser);
export default userRouter;
//# sourceMappingURL=user.routes.js.map