import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';

export const commandSchema = entitySchema.extend({
  title: z.string().catch(''),
  trigger: z.string().catch(''),
});
