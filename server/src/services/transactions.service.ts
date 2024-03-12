import { StatusCodes } from 'http-status-codes';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { TransactionsRepository } from '../database/repositories/transactions.repository';
import { CreateTransactionDTO } from '../dtos/transactions.dto';
import { Transaction } from '../entities/transactions.entity';
import { AppError } from '../errors/app.error';

export class TransactionsService {
  constructor(
    private transictionsRepository: TransactionsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async create({
    amount,
    categoryId,
    date,
    title,
    type,
  }: CreateTransactionDTO): Promise<Transaction> {
    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new AppError('Category does not exists.', StatusCodes.NOT_FOUND);
    }

    const transaction = new Transaction({
      title,
      amount,
      category,
      date,
      type,
    });

    const createdTransaction =
      await this.transictionsRepository.create(transaction);

    return createdTransaction;
  }
}
