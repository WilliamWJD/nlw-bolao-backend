import { Router } from 'express';

import { GuessCountController } from '../controllers/GuessCountController';

const GuessRoutes = Router();

const guessCountController = new GuessCountController();

GuessRoutes.get('/count', guessCountController.handle);

export { GuessRoutes }