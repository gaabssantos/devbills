import { Category } from '../entities/category.entity';

export class CategoriesService {
  async create(): Promise<Category> {
    const category = new Category({
      title: 'Example category',
      color: '#f231ee',
    });

    return category;
  }
}
