import { Request, Response } from "express";
import { GetAllPoolsService } from "../services/GetAllPoolsService";

const getAllPoolsService = new GetAllPoolsService();

class GetAllPoolsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const pools = await getAllPoolsService.execute({ userId: req.user.id });
        return res.status(201).json(pools);
    }
}

export { GetAllPoolsController }