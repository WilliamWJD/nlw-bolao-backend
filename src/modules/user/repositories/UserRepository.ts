import { prisma } from "../../../database/prismaClient";
import { UserResponseDto } from "../dtos/UserResponseDto";
import { ApiGoogleResponse } from "../services/AuthService";

class UserRepository {
    async findAllCount() {
        const count = await prisma.user.count();
        return count;
    }

    async findUserByGoogleId(googleId: string): Promise<UserResponseDto | null> {
        return await prisma.user.findUnique({
            where: {
                googleId: googleId
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true
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