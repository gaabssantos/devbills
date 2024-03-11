import express from 'express';
import 'dotenv/config';

import { setupMongo } from './database';
import { routes } from './routes';

setupMongo().then(() => {
  const port = 3333;

  const app = express();

  app.use(express.json());

  app.use(routes);

  app.listen(port, () => console.log(`🎇 Server has started in port ${port}!`));
});
