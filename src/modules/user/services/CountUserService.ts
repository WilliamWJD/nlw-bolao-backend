import { UserRepository } from "../repositories/UserRepository"

const userRepository = new UserRepository();

class CountUserService {
    async execute() {
        return await userRepository.findAllCount();
    }
}

export { CountUserService }