import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

class CreatePoolService {
    async execute(title: string, code: string) {
        return await poolRepository.createPool(
            title,
            code
        );
    }
}

export { CreatePoolService }