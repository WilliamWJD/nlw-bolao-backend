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
                ownerId,
                participants: {
                    create: {
                        userId: ownerId
                    }
                }
            }
        })
    }

    async findPoolByCode(code: string, userId: string) {
        return await prisma.pool.findUnique({
            where: {
                code
            },
            include: {
                participants: {
                    where: {
                        userId
                    }
                }
            }
        })
    }

    async createParticipant(poolId: string, userId: string) {
        await prisma.participant.create({
            data: {
                poolId,
                userId
            }
        })
    }

    async getPoolsByUser(userId: string) {
        return await prisma.pool.findMany({
            where: {
                participants: {
                    some: {
                        userId: userId
                    }
                }
            },
            include: {
                _count: {
                    select: {
                        participants: true
                    }
                },
                participants: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                avatarUrl: true
                            }
                        },
                    },
                    take: 4
                },
                owner: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })
    }

    async getPoolBydId(id: string) {
        return await prisma.pool.findUnique({
            where: {
                id
            },
            include: {
                _count: {
                    select: {
                        participants: true
                    }
                },
                participants: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                avatarUrl: true
                            }
                        },
                    },
                    take: 4
                },
                owner: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })
    }
}

export { PoolRepository };