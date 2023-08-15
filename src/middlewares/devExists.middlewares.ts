import { NextFunction, Response, Request } from "express";
import { InfosResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

export const devExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: InfosResult = await client.query(
    'SELECT * FROM "developerInfos" WHERE "developerId" = $1',
    [req.params.id]
  )

  if(query.rowCount) {
    throw new AppError("Developer already exists",409);
  }
  return next();
};