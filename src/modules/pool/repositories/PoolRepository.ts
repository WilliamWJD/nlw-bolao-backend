import { prisma } from "../../../database/prismaClient";

class PoolRepository {
    async findAllCount() {
        const count = await prisma.pool.count();
        return count;
    }

    async createPool(title: string, code: string, ownerId: string) {
        return await prisma.pool.create({
            data: {
                title,
                code,
                ownerId
            }
        })
    }
}

export { PoolRepository };