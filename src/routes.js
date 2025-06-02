import { Router } from 'express';

const routes = new Router();
routes.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Rota inicial' });
});

routes.get('/user', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Rota user' });
});

export default routes;