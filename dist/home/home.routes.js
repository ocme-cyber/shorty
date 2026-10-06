import express from "express";
import * as homeController from "./home.controller.js";
const homeRouter = express.Router();
homeRouter.get("/", homeController.getHomePage);
export default homeRouter;
//# sourceMappingURL=home.routes.js.map