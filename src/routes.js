import { Router } from 'express';

const routes = new Router();
routes.get('/ping', (req, res) => {
  res.status(200).json({ status: 'success', message: 'pong' });
});

export default routes;