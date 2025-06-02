import { Router } from 'express';
import UserRoutes from './modules/user/user.routes.js';

const routes = new Router();
routes.use('/user', UserRoutes);

export default routes;