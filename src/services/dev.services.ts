import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult, DevUpdate } from "../interfaces";
import { client } from "../database";

const create = async (payload: DeveloperCreate):Promise<Developer> =>{
    const queryFormat:string = format(
        `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload),
        
    );
        const queryResult: DeveloperResult = await client.query(queryFormat)
        return queryResult.rows[0]
};

const partialUpdate = async (payload: DevUpdate, devId: string):Promise<Developer> =>{
    const queryFormat:string = format(
        `UPDATE "developers" SET(%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(payload),
        Object.values(payload),
    );
        const queryResult: DeveloperResult = await client.query(queryFormat,[devId])
        return queryResult.rows[0]
};



const destroy = async (devId:string): Promise<void> =>{
    await client.query('DELETE FROM "developers" WHERE "id" = $1',[devId])

}

const retrieve = async (id: string): Promise<Developer> => {
  const query: string = `
      SELECT 
          "dev"."id" AS "developerId",
          "dev"."name" AS "developerName",
          "dev"."email" AS "developerEmail",
          "devInfo"."developerSince" AS "developerInfoDeveloperSince",
          "devInfo"."preferredOS" AS "developerInfoPreferredOS"
      FROM "developers" AS "dev" 
      LEFT JOIN "developerInfos" AS "devInfo" 
          ON "devInfo"."id" = "dev"."id"
      WHERE "dev"."id" = $1;
   `;
   const queryResult: DeveloperResult = await client.query(query, [id]);
   return queryResult.rows[0];
 };



export default {create,partialUpdate,destroy,retrieve}