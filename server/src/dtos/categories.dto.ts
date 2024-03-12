import { z } from 'zod';

export type CreateCategoryDTO = {
  title: string;
  color: string;
};

export const createCategorySchema = {
  title: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/, 'The color must be a HEX code.'),
};
