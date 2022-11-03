import { GuessRepository } from "../repositories/GuessRepository"

const guessRepository = new GuessRepository();

class CountGuessService {
    async execute() {
        return await guessRepository.findAllCount();
    }
}

export { CountGuessService }