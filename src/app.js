import express from 'express';
import cors from 'cors';

import routes from './routes.js';
import { baseErrorMiddleware, prismaErrorMiddleware } from './app/middlewares/error.middleware.js';

class App {
  constructor() {
    this.app = new express();
    this.setMiddlewares()
    this.setRoutes();
    this.setErrorMiddleware();
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }
  
  setRoutes() {
    this.app.use(routes);
  }

  setErrorMiddleware() {
    this.app.use(prismaErrorMiddleware);
    this.app.use(baseErrorMiddleware);
  }
}

export default new App().app;