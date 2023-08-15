import format from "pg-format";
import { Projects, ProjectsCreate } from "../interfaces";
import { client } from "../database";
import { ProjectResult, ProjectUpdate } from "../interfaces/projects.interface";

const create = async (payload: ProjectsCreate):Promise<Projects> =>{
    const queryFormat:string = format(
        `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload),
        
    );
        const queryResult: ProjectResult = await client.query(queryFormat)
        return queryResult.rows[0]
};

const retrieve = async (id: string): Promise<Projects> => {
    const query: string = `
          SELECT 
              "proj"."id" AS "projectId",
              "proj"."name" AS "projectName",
              "proj"."description" AS "projectDescription",
              "proj"."repository" AS "projectRepository",
              "proj"."startDate" AS "projectStartDate",
              "proj"."endDate" AS "projectEndDate",
              "dev"."name" AS "projectDeveloperName"
          FROM "projects" AS "proj"  
          LEFT JOIN "developers" AS "dev" 
              ON "proj"."developerId" = "dev"."id"
          WHERE "proj"."id" = $1;
       `;
  
    const queryResult: ProjectResult = await client.query(query, [id]);
    return queryResult.rows[0];
  };

const partialUpdate = async (payload: ProjectUpdate, devId: string):Promise<Projects> =>{
    const queryFormat:string = format(
        `UPDATE "projects" SET(%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(payload),
        Object.values(payload),
    );
        const queryResult: ProjectResult = await client.query(queryFormat,[devId])
        return queryResult.rows[0]
};

export default {create,partialUpdate,retrieve}