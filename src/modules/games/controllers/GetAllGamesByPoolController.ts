import { Request, Response } from "express";
import { GetAllGamesByPoolService } from "../services/GetAllGamesByPoolService";

const getAllGamesByPoolService = new GetAllGamesByPoolService();

class GetAllGamesByPoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const games = await getAllGamesByPoolService.execute({ id, userId: req.user.id });
        return res.status(201).json(games);
    }
}

export { GetAllGamesByPoolController }