import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

class CountUserService {
    async execute() {
        return await poolRepository.findAllCount();
    }
}

export { CountUserService }