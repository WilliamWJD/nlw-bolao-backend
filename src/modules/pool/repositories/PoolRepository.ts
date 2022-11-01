import { prisma } from "../../../database/prismaClient";

class PoolRepository {
    async findAll() {
        const pools = await prisma.pool.findMany()
        return pools;
    }
}

export { PoolRepository };