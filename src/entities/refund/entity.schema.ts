import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { RefundStatuses } from './type';

export const refundSchema = entitySchema.extend({
  providerToken: z.string().catch(''),
  status: z.enum(RefundStatuses).catch('' as RefundStatuses),
  amount: z.number().catch(0),
  comment: z.string().catch(''),
});
