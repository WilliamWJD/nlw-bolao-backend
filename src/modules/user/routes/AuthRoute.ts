import { Router } from 'express';

import { AuthController } from '../controllers/AuthController';

const AuthRoute = Router();

const authController = new AuthController();

AuthRoute.post('/', authController.handle);

export { AuthRoute }