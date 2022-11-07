import { Router } from 'express';

import { GetAllGamesByPoolController } from '../controllers/GetAllGamesByPoolController';

const GameRoutes = Router();

const getAllGamesByPoolController = new GetAllGamesByPoolController();

GameRoutes.get('/:id', getAllGamesByPoolController.handle);

export { GameRoutes }