import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  CreateTransactionDTO,
  GetDashboardDTO,
  IndexTransactionDTO,
  GetFinancialEvolutionDTO,
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

  getDashboard = async (
    req: Request<unknown, unknown, unknown, GetDashboardDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { beginDate, endDate } = req.query;
      const result = await this.transactionsService.getDashboard({
        beginDate,
        endDate,
      });

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  };

  getFinancialEvolution = async (
    req: Request<unknown, unknown, unknown, GetFinancialEvolutionDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { year } = req.query;
      const result = await this.transactionsService.getFinancialEvolution({
        year,
      });

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  };
}
