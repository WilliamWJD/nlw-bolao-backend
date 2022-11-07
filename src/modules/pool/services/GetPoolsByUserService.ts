import { Pool } from "@prisma/client";

interface Request {
    userId: string
}

class GetPoolsByUserService {
    async execute({ userId }: Request): Promise<Pool[] | null> {

        return null;
    }
}

export { GetPoolsByUserService }