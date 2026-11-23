import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { Intervals } from '../../types/common';

export const billingPlanCycleSchema = entitySchema.extend({
  priority: z.number().catch(0),
  price: z.number().catch(0),
  totalPrice: z.number().catch(0),
  convertedTotalPrice: z.number().catch(0),
  exchangeRate: z.number().catch(0),
  interval: z.enum(Intervals).catch('' as Intervals),
  intervalCount: z.number().catch(0),
  chargeLimit: z.number().nullable().catch(null),
  chargeCount: z.number().catch(0),
  discountPercentage: z.number().catch(0),
  discountAmount: z.number().catch(0),
  convertedDiscountAmount: z.number().catch(0),
  discountExchangeRate: z.number().catch(0),
});
