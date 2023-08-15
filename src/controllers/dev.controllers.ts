import { Request,Response} from "express";
import { Developer } from "../interfaces";
import { devServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    const developer:Developer = await devServices.create(req.body)
    return res.status(201).json(developer)
}

const partialUpdate = async (req: Request, res: Response): Promise<Response> =>{
    const developer:Developer = await devServices.partialUpdate(req.body,req.params.id)
    return res.status(200).json(developer)
}

const destroy = async (req: Request, res: Response): Promise<Response> =>{
    await devServices.destroy(req.params.id)
    return res.status(204).json()
}

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const developer: Developer = await devServices.retrieve(req.params.id);
    return res.status(200).json(developer);
  };




export default {create,partialUpdate,destroy,retrieve}