import { prisma } from "../../../database/prismaClient";

class GameRepository {
    async findGamesByPoolId(poolId: string, userId: string) {
        return await prisma.game.findMany({
            orderBy: {
                date: 'desc'
            },
            include: {
                guesses: {
                    where: {
                        participant: {
                            userId,
                            poolId
                        }
                    }
                }
            }
        })
    }
}

export { GameRepository }