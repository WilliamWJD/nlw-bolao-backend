import { Request, Response } from "express";
import { CountUserService } from "../services/CountUserService";

const countUserService = new CountUserService();

class CountUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(await countUserService.execute());
    }
}

export { CountUserController }