import express from 'express';
import 'dotenv/config';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes';

setupMongo().then(() => {
  const port = 4444;

  const app = express();

  app.use(express.json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(port, () => console.log(`🎇 Server has started in port ${port}!`));
});
