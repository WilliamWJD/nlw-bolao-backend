import { Router } from 'express';
import { PoolRoutes } from '../modules/pool/routes/PoolRoutes';

const routes = Router();

routes.use('/pools', PoolRoutes);

export { routes }