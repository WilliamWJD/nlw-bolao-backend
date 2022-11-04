import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

const authService = new AuthService();

class AuthController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { access_token } = req.body;
        const data = await authService.execute({ access_token });
        return res.status(201).json(data);
    }
}

export { AuthController }