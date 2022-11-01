import { Router } from 'express';
import { PoolController } from '../controllers/PoolController';

const PoolRoutes = Router();

const poolController = new PoolController();

PoolRoutes.get('/count', poolController.handle);

export { PoolRoutes }