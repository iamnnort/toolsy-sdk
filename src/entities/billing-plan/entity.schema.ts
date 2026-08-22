import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { BillingPlanStatuses } from './type';

export const billingPlanSchema = entitySchema.extend({
  status: z.enum(BillingPlanStatuses).catch('' as BillingPlanStatuses),
  billingPlanCycleAt: z.string().catch(''),
});
