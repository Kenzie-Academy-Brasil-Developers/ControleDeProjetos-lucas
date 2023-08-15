import { NextFunction,Response,Request } from "express";
import { client } from "../database";
import { DeveloperResult } from "../interfaces";
import AppError from "../errors"

export const userIdExists = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
const id:string = req.params.id

const query:DeveloperResult = await client.query(
    `SELECT * FROM "developers" WHERE "id" = $1`,
    [id]
);

if(!query.rowCount){
    throw new AppError("Dev not found.",404)
}
    return next()

}