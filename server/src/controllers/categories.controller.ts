import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateCategoryDTO } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';

export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  create = async (
    req: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { title, color } = req.body;

      const category = await this.categoriesService.create({ title, color });

      return res.status(StatusCodes.CREATED).json(category);
    } catch (err) {
      next(err);
    }
  };

  index = async (
    _: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const categories = await this.categoriesService.index();

      return res.status(StatusCodes.OK).json(categories);
    } catch (err) {
      next(err);
    }
  };
}
