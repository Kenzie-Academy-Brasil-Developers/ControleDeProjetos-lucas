import { Router } from "express";
import { devControllers,devInfosControllers } from "../controllers";
import middlewares from "../middlewares";
import devInfosRouter from "./devinfos.router";

const devRouter:Router = Router()

devRouter.post("",middlewares.uniqueEmail, devControllers.create)
// devRouter.get("",devControllers.read)

devRouter.use("/:id",middlewares.userIdExists)
devRouter.get("/:id", devControllers.retrieve)
devRouter.patch("/:id",middlewares.uniqueEmail,devControllers.partialUpdate)
devRouter.delete("/:id",devControllers.destroy)

devRouter.post("/:id/infos",middlewares.devExists,middlewares.validateOSProject, devInfosControllers.create)



export default devRouter;