import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { currencySchema } from '../currency/entity.schema';
import { Intervals } from '../../types/common';
import { SubscriptionPlanAccesses, SubscriptionPlanFixations, SubscriptionPlanVisibilities } from './type';

export const subscriptionPlanSchema = entitySchema.extend({
  name: z.string().catch(''),
  price: z.number().catch(0),
  isInfinite: z.boolean().catch(false),
  closesAt: z.string().catch(''),
  subscriberLimit: z.number().catch(0),
  interval: z.enum(Intervals).catch('' as Intervals),
  intervalCount: z.number().catch(0),
  retryLimit: z.number().catch(0),
  retryInterval: z.enum(Intervals).catch('' as Intervals),
  retryIntervalCount: z.number().catch(0),
  priority: z.number().catch(0),
  access: z.enum(SubscriptionPlanAccesses).catch('' as SubscriptionPlanAccesses),
  visibility: z.enum(SubscriptionPlanVisibilities).catch('' as SubscriptionPlanVisibilities),
  fixation: z.enum(SubscriptionPlanFixations).catch('' as SubscriptionPlanFixations),
  currency: currencySchema.catch(() => currencySchema.parse({})),
});
