import { StatusCodes } from 'http-status-codes';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CreateCateogryDTO } from '../dtos/categories.dto';
import { Category } from '../entities/category.entity';
import { AppError } from '../errors/app.error';

export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create({ title, color }: CreateCateogryDTO): Promise<Category> {
    const foundCategory = await this.categoriesRepository.findByTitle(title);

    if (foundCategory) {
      throw new AppError('Category already exists.', StatusCodes.CONFLICT);
    }

    const category = new Category({
      title,
      color,
    });

    const createdCategory = await this.categoriesRepository.create(category);

    return createdCategory;
  }
}
