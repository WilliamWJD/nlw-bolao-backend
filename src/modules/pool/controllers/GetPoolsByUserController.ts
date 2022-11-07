import { Request, Response } from "express";
import { GetPoolsByUserService } from "../services/GetPoolsByUserService";

const getPoolsByUserService = new GetPoolsByUserService();

class GetPoolsByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        await getPoolsByUserService.execute({ userId: req.user.id });
        return res.status(201).send();
    }
}

export { GetPoolsByUserController }