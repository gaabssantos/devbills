import { z } from 'zod';

import {
  createCategorySchema,
  createTransactionSchmea,
  transactionsFilterSchema,
} from './schemas';

export type CreateCategoryData = z.infer<typeof createCategorySchema>;

export type CreateTransactionData = z.infer<typeof createTransactionSchmea>;

export type TransactionFilterData = z.infer<typeof transactionsFilterSchema>;
