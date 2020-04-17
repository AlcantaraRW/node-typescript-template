import { Router } from 'express';

const routes = Router();

routes.use('/', (request, response) => response.json({ message: 'It works!' }));

export default routes;
