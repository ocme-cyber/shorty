import express from "express";

import * as userController from "./user.controllers.js"
const userRouter = express.Router();    

userRouter.get("/login", userController.getLoginPage)
userRouter.get("/register", userController.getRegisterPage)

export default userRouter;