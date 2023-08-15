import { Request,Response} from "express";
import { Projects } from "../interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    const Projects:Projects = await projectsServices.create(req.body)
    return res.status(201).json(Projects)
}

const partialUpdate = async (req: Request, res: Response): Promise<Response> =>{
    const Projects:Projects = await projectsServices.partialUpdate(req.body,req.params.id)
    return res.status(200).json(Projects)
}

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const Projects: Projects = await projectsServices.retrieve(req.params.id);
    return res.status(200).json(Projects);
  };

export default {create,partialUpdate,retrieve}