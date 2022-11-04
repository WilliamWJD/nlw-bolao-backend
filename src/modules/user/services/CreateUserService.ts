import { UserResponseDto } from "../dtos/UserResponseDto";
import { UserRepository } from "../repositories/UserRepository"
import { ApiGoogleResponse } from "./AuthService";

const userRepository = new UserRepository();

class CreateUserService {
    async execute(data: ApiGoogleResponse): Promise<UserResponseDto> {
        let user = await userRepository.findUserByGoogleId(data.id);

        if (!user) {
            user = await userRepository.createUser(data);
        }

        return user;
    }
}

export { CreateUserService }