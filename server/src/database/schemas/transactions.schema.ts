import mongoose from 'mongoose';

import { CategorySchema } from './categories.schema';

const TransactionsSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    type: String,
    date: Date,
    category: CategorySchema,
  },
  {
    versionKey: false,
  },
);

export const TransactionModel = mongoose.model(
  'Transactions',
  TransactionsSchema,
);
