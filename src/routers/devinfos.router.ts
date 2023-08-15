import { Router } from "express";
import { devInfosControllers } from "../controllers";

const devInfosRouter:Router = Router()

devInfosRouter.post("/:devId",devInfosControllers.create)



export default (devInfosRouter);