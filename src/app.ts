import "express-async-errors";
import "dotenv/config";
import express, { Application,json } from "express";
import middlewares from "./middlewares";
import { devRouter,devInfosRouter } from "./routers";
import projectsRouter from "./routers/projects.router";

const app: Application = express();
app.use(json());

app.use("/developers",devRouter)
app.use("/projects",projectsRouter)

app.use(middlewares.handleError);
export default app;
