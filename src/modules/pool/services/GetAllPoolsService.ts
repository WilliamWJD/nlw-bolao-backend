import { Pool } from "@prisma/client";
import { PoolRepository } from "../repositories/PoolRepository";

const poolRepository = new PoolRepository();

interface Request {
    userId: string;
}

class GetAllPoolsService {
    async execute({ userId }: Request): Promise<Pool[]> {
        return await poolRepository.getPoolsByUser(userId);
    }
}

export { GetAllPoolsService }