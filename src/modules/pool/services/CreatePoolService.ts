import ShortUniqueId from 'short-unique-id';
import { PoolRepository } from "../repositories/PoolRepository"

const poolRepository = new PoolRepository();

interface Request {
    title: string;
    ownerId: string;
}

class CreatePoolService {
    async execute({ title, ownerId }: Request) {
        const generate = new ShortUniqueId({ length: 6 });
        const code = String(generate()).toUpperCase();

        return await poolRepository.createPool(
            title,
            code,
            ownerId
        );
    }
}

export { CreatePoolService }