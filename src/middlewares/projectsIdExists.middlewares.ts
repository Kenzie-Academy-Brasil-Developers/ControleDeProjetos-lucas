import { NextFunction, Request, Response } from "express";
import { ProjectsResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";


export const ProjectIdExists  = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const queryResult: ProjectsResult = await client.query(
    `SELECT * FROM "projects" WHERE "id" = $1;`,
    [id]
  );
  
  if (!queryResult.rowCount) {
    throw new AppError("Project not found.", 404);
  }

  return next();
};