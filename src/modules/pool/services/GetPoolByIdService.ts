import { PoolRepository } from "../repositories/PoolRepository";

const poolRepository = new PoolRepository();

interface Request {
    id: string;
}

class GetPoolByIdService {
    async execute({ id }: Request): Promise<any> {
        const pool = await poolRepository.getPoolBydId(id);
        return pool;
    }
}

export { GetPoolByIdService }