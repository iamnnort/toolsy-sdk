import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';

export const tagSchema = entitySchema.extend({
  name: z.string().catch(''),
});
