import { QueryResult } from "pg";

type Developer={
id: number;
name: string ;
email:string;
}

type DeveloperResult = QueryResult<Developer>;
type DeveloperCreate = Omit<Developer,"id">;
type DevUpdate = Partial<DeveloperCreate>
type DevRead = Array<Developer>;

export {Developer,DeveloperResult,DeveloperCreate,DevUpdate,DevRead}