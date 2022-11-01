import { prisma } from "../../../database/prismaClient";

class PoolRepository {
    async findAllCount() {
        const count = await prisma.pool.count();
        return count;
    }
}

export { PoolRepository };