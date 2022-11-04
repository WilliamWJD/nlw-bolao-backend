import { Request, Response } from "express";
import { CreatePoolService } from "../services/CreatePoolService";

const createPoolService = new CreatePoolService();

class CreatePoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { title } = req.body;
        return res.status(201).json(await createPoolService.execute({ title, ownerId: req.user.id }));
    }
}

export { CreatePoolController }