import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

class CountPoolService {
    async execute() {
        return await poolRepository.findAllCount();
    }
}

export { CountPoolService }