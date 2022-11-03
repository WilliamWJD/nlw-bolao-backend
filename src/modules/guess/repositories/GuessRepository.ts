import { prisma } from "../../../database/prismaClient";

class GuessRepository {
    async findAllCount() {
        const count = await prisma.guess.count();
        return count;
    }
}

export { GuessRepository };