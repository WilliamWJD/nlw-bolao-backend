import { Request, Response } from "express";
import { CountGuessService } from "../services/CountGuessService";

const countGuessService = new CountGuessService();

class GuessCountController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(await countGuessService.execute());
    }
}

export { GuessCountController }