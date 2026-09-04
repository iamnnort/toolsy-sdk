import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';

export const contentSchema = entitySchema.extend({
  title: z.string().catch(''),
  text: z.string().catch(''),
});
