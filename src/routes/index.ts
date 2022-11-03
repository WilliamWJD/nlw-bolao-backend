import { Router } from 'express';

import { PoolRoutes } from '../modules/pool/routes/PoolRoutes';
import { UserRoutes } from '../modules/user/routes/UserRoutes';

const routes = Router();

routes.use('/pools', PoolRoutes);
routes.use('/users', UserRoutes);

export { routes }