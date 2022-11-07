import { Request, Response } from "express";
import { JoinPoolService } from "../services/JoinPoolService";

const joinPoolService = new JoinPoolService();

class JoinPoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { code } = req.body;
        await joinPoolService.execute({ code, userId: req.user.id })
        return res.send();
    }
}

export { JoinPoolController }