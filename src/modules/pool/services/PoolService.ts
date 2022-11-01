import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

class PoolService {
    async execute() {
        return await poolRepository.findAllCount();
    }
}

export { PoolService }