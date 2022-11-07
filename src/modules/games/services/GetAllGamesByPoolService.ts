import { Game } from "@prisma/client";
import { GameRepository } from "../repositories/GameRepository";

interface Request {
    id: string;
    userId: string;
}

const gameRepository = new GameRepository();

class GetAllGamesByPoolService {
    async execute({ id, userId }: Request): Promise<Game[]> {
        const games = await gameRepository.findGamesByPoolId(id, userId);
        const teste = games.map(game => {
            return {
                ...game,
                guess: game.guesses.length > 0 ? game.guesses[0] : null,
                guesses: undefined
            }
        })
        return teste;
    }
}

export { GetAllGamesByPoolService }