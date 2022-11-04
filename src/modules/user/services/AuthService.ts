import { User } from "@prisma/client";
import axios from "axios";
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

const createUserService = new CreateUserService();

class AuthService {
    async execute({ access_token }: Request): Promise<User> {
        const userResponse = await axios.get<ApiGoogleResponse>("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        const userData = userResponse.data;

        return await createUserService.execute(userData);
    }

}

export { AuthService }