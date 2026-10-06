import express from "express";
import * as urlControllers from "./url.controllers.js";
import { urlMiddleware } from "../middlewares/urlMiddleware.js";
import { verifyMiddleware } from "../middlewares/verifyMiddleware.js";
const urlRouter = express.Router();
urlRouter.get("/", verifyMiddleware, urlControllers.getHomePage);
urlRouter.get("/:urlCode", urlControllers.redirectToOrigins);
urlRouter.post("/create", urlMiddleware, urlControllers.createUrl);
export default urlRouter;
//# sourceMappingURL=url.router.js.map