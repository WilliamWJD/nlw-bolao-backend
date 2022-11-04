import axios from "axios";
import jwt from 'jsonwebtoken';

import { CreateUserService } from "./CreateUserService";

interface Request {
    access_token: string;
}

export interface ApiGoogleResponse {
    id: string;
    email: string;
    name: string;
    picture: string;
}

interface AuthResponse {
    usuario: {
        id: string;
        name: string;
    },
    token: string;
}

const createUserService = new CreateUserService();

class AuthService {
    async execute({ access_token }: Request): Promise<AuthResponse> {
        const userResponse = await axios.get<ApiGoogleResponse>("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        // recupera dados da api do google
        const userData = userResponse.data;

        // salva ou retorna usuario do banco
        const user = await createUserService.execute(userData);

        // cria token jwt
        const token = jwt.sign({ name: user.name, avatarUrl: user.avatarUrl }, "nlwcopa", {
            subject: user.id,
            expiresIn: '1d'
        })

        // monta objeto de retorno
        const data = {
            usuario: user,
            token
        }

        return data;
    }

}

export { AuthService }