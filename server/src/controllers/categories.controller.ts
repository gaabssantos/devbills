import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../database/schemas/categories.schema';
import { CreateCateogryDTO } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CreateCateogryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;

      const repository = new CategoriesRepository(CategoryModel);
      const service = new CategoriesService(repository);

      const category = await service.create({ title, color });

      return res.status(StatusCodes.CREATED).json(category);
    } catch (err) {
      next(err);
    }
  }
}
