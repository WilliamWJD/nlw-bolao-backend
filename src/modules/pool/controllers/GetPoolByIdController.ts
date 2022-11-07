import { Request, Response } from "express";
import { GetPoolByIdService } from "../services/GetPoolByIdService";

const getPoolByIdService = new GetPoolByIdService();

class GetPoolByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const pool = await getPoolByIdService.execute({ id });
        return res.status(201).json(pool);
    }
}

export { GetPoolByIdController }