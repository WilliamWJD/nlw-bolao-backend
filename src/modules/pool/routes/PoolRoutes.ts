import { celebrate } from 'celebrate';
import { Router } from 'express';

import { CountPoolController } from '../controllers/CountPoolController';
import { CreatePoolController } from '../controllers/CreatePoolController';
import { JoinPoolController } from '../controllers/JoinPoolController';
import { createPoolValidator } from '../validators/CreatePoolValidator';

const PoolRoutes = Router();

const countPoolController = new CountPoolController();
const createPoolController = new CreatePoolController();
const joinPoolController = new JoinPoolController();

PoolRoutes.get('/count', countPoolController.handle);

PoolRoutes.post('/', celebrate(createPoolValidator), createPoolController.handle);
PoolRoutes.post('/:id/join', joinPoolController.handle);

export { PoolRoutes }