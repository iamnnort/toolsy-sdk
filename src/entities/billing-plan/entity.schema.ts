import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { BillingPlanStatuses, BillingPlanSystemStatuses } from './type';

export const billingPlanSchema = entitySchema.extend({
  status: z.enum(BillingPlanStatuses).catch('' as BillingPlanStatuses),
  systemStatus: z.enum(BillingPlanSystemStatuses).nullable().catch(null),
  retryCount: z.number().catch(0),
  isProviderScheduled: z.boolean().catch(false),
  nextChargeAt: z.string().catch(''),
});
