import { Router } from 'express';

import { AuthRoute } from '../modules/user/routes/AuthRoute';
import { GuessRoutes } from '../modules/guess/routes/GuessRoutes';
import { PoolRoutes } from '../modules/pool/routes/PoolRoutes';
import { UserRoutes } from '../modules/user/routes/UserRoutes';

const routes = Router();

routes.use('/auth', AuthRoute);

routes.use('/pools', PoolRoutes);
routes.use('/users', UserRoutes);
routes.use('/guess', GuessRoutes);

export { routes }