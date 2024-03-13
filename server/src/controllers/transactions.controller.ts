import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateCategoryDTO } from '../dtos/categories.dto';
import {
  CreateTransactionDTO,
  IndexTransactionDTO,
} from '../dtos/transactions.dto';
import { TransactionsService } from '../services/transactions.service';

export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  create = async (
    req: Request<unknown, unknown, CreateTransactionDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { amount, date, title, type, categoryId } = req.body;

      const transaction = await this.transactionsService.create({
        amount,
        date,
        title,
        type,
        categoryId,
      });

      return res.status(StatusCodes.CREATED).json(transaction);
    } catch (err) {
      next(err);
    }
  };

  index = async (
    req: Request<unknown, unknown, unknown, IndexTransactionDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { beginDate, categoryId, endDate, title } = req.query;
      const transactions = await this.transactionsService.index({
        beginDate,
        categoryId,
        endDate,
        title,
      });

      return res.status(StatusCodes.OK).json(transactions);
    } catch (err) {
      next(err);
    }
  };
}
