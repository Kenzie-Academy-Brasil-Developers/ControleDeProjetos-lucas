import { Router } from "express";
import { projectsControllers } from "../controllers";
import middlewares from "../middlewares";

const projectsRouter: Router = Router();

projectsRouter.post("",middlewares.validateProjectIdDeveloper, projectsControllers.create);
projectsRouter.get("/:id",middlewares.ProjectIdExists,projectsControllers.retrieve);
projectsRouter.patch("/:id",middlewares.ProjectIdExists,middlewares.validateProjectIdDeveloper,projectsControllers.partialUpdate);

export default projectsRouter;



