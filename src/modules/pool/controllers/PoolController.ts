import { Request, Response } from "express";
import { PoolService } from "../services/PoolService";

const poolService = new PoolService();

class PoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(await poolService.execute());
    }
}

export { PoolController }