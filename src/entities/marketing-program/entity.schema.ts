import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';

export const marketingProgramSchema = entitySchema.extend({
  name: z.string().catch(''),
  token: z.string().catch(''),
});
