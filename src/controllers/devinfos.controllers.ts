import { Request,Response} from "express";
import { DeveloperInfos,InfosCreate } from "../interfaces";
import { devinfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    const payload:InfosCreate = {...req.body,developerId:req.params.id}
    const DeveloperInfo:DeveloperInfos = await devinfosServices.create(payload)
    return res.status(201).json(DeveloperInfo)
}

export default {create}
