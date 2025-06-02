import { Router } from 'express';

import * as UserController from './user.controller.js';

const routes = new Router();
routes.get('/', UserController.getUsers);
routes.get('/:id', UserController.getUserById);
routes.post('/', UserController.createUser);
routes.put('/:id', UserController.updateUser);
routes.delete('/:id', UserController.deleteUser);

export default routes;