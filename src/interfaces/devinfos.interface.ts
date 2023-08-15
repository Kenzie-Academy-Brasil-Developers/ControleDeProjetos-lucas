import { Query, QueryResult } from "pg"

type DeveloperInfos={
    id: number;
    developerSince: Date | string;
    preferredOS: string; //"OS_METHODS" NOT NULL,
    developerId: number;
}

type InfosCreate = Omit<DeveloperInfos,"id">
type InfosResult = QueryResult<DeveloperInfos>



export {DeveloperInfos,InfosResult,InfosCreate}