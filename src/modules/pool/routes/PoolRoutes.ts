import { Router } from 'express';
import { CountPoolController } from '../controllers/CountPoolController';
import { CreatePoolController } from '../controllers/CreatePoolController';

const PoolRoutes = Router();

const countPoolController = new CountPoolController();
const createPoolController = new CreatePoolController();

PoolRoutes.get('/count', countPoolController.handle);
PoolRoutes.post('/', createPoolController.handle);

export { PoolRoutes }