import cors from 'cors';
import express from 'express';
import 'dotenv/config';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes';

setupMongo().then(() => {
  const port = process.env.PORT || 3333;

  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  );
  app.use(routes);
  app.use(errorHandler);

  app.listen(port as number, '0.0.0.0', () =>
    console.log(`🎇 Server has started in port ${port}!`),
  );
});
