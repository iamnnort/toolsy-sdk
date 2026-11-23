import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';

export const refundSchema = entitySchema.extend({
  providerToken: z.string().catch(''),
  amount: z.number().catch(0),
  comment: z.string().catch(''),
});
