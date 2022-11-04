import { prisma } from "../../../database/prismaClient";
import { ApiGoogleResponse } from "../services/AuthService";

class UserRepository {
    async findAllCount() {
        const count = await prisma.user.count();
        return count;
    }

    async findUserByGoogleId(googleId: string) {
        return await prisma.user.findUnique({
            where: {
                googleId: googleId
            }
        })
    }

    async createUser(userInfo: ApiGoogleResponse) {
        return await prisma.user.create({
            data: {
                googleId: userInfo.id,
                name: userInfo.name,
                email: userInfo.email,
                avatarUrl: userInfo.picture
            }
        })
    }
}

export { UserRepository };