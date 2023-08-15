import format from "pg-format";
import {DeveloperInfos,InfosResult,InfosCreate} from "../interfaces/devinfos.interface";
import { client } from "../database";

const create = async (payload: InfosCreate):Promise<DeveloperInfos> =>{
    const queryFormat:string = format(
        `INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload),
    );
        const queryResult: InfosResult = await client.query(queryFormat)
        return queryResult.rows[0]
};

// const read = async (): Promise<Array<Developer> > =>{
//     const queryResult:DeveloperInfos = await client.query(
//         `SELECT * FROM "developerInfos";`
//         );

//     return queryResult.rows
// }

export default {create}