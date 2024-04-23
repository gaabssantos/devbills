import cors from 'cors';
import express from 'express';
import 'dotenv/config';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes';

setupMongo().then(() => {
  const port = process.env.PORT || 5000;

  const app = express();

  const corsConfig = {
    origin: process.env.FRONT_URL,
    credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };

  app.use(express.json());
  app.options('', cors(corsConfig));
  app.use(cors(corsConfig));

  app.use(routes);
  app.use(errorHandler);

  app.listen(port as number, () =>
    console.log(`🎇 Server has started in port ${port}!`),
  );
});
