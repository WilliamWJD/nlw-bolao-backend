import { Request, Response } from "express";
import { CountPoolService } from "../services/CountPoolService";

const countPoolService = new CountPoolService();

class CountPoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(await countPoolService.execute());
    }
}

export { CountPoolController }