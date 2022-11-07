import { PoolRepository } from "../repositories/PoolRepository";

const poolRepository = new PoolRepository();

interface Request {
    code: string;
    userId: string;
}

class JoinPoolService {
    async execute({ code, userId }: Request): Promise<void> {
        const pool = await poolRepository.findPoolByCode(code, userId);

        if (!pool) {
            throw Error("Pool not found")
        }

        if (pool.participants.length > 0) {
            throw Error("You alredy joined this pool")
        }

        await poolRepository.createParticipant(pool.id, userId)
    }
}

export { JoinPoolService }