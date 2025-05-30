import express from 'express';
import cors from 'cors';

import routes from './routes.js';

class App {
  constructor() {
    this.app = new express();
    this.setMiddlewares()
    this.setRoutes();
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }
  
  setRoutes() {
    this.app.use(routes);
  }
}

export default new App().app;