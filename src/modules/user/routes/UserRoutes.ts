import { Router } from 'express';

import { CountUserController } from '../controllers/CountUserController';

const UserRoutes = Router();

const countUserController = new CountUserController();

UserRoutes.get('/count', countUserController.handle);

export { UserRoutes }