import ShortUniqueId from 'short-unique-id';
import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

class CreatePoolService {
    async execute(title: string) {
        const generate = new ShortUniqueId({ length: 6 });
        const code = String(generate()).toUpperCase();
        return await poolRepository.createPool(
            title,
            code
        );
    }
}

export { CreatePoolService }