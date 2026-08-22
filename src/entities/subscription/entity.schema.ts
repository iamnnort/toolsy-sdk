import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { SubscriptionStatuses } from './type';

export const subscriptionSchema = entitySchema.extend({
  isInfinite: z.boolean().catch(false),
  startedAt: z.string().catch(''),
  expiredAt: z.string().catch(''),
  status: z.enum(SubscriptionStatuses).catch('' as SubscriptionStatuses),
});
