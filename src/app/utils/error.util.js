import HttpError from '../configs/error.config.js';

export const BadRequest = (message) => new HttpError(400, message);
export const Unauthorized = (msg) => new HttpError(401, msg);
export const NotFound = (msg) => new HttpError(404, msg);