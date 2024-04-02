import { z } from 'zod';

import { createCategorySchema, createTransactionSchmea } from './schemas';

export type CreateCategoryData = z.infer<typeof createCategorySchema>;

export type CreateTransactionData = z.infer<typeof createTransactionSchmea>;
