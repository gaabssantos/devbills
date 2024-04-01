import { z } from 'zod';

export const createCategorySchema = z.object({
  title: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
});
