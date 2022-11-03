import { prisma } from "../../../database/prismaClient";

class UserRepository {
    async findAllCount() {
        const count = await prisma.user.count();
        return count;
    }
}

export { UserRepository };