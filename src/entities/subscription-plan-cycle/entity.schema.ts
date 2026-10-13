import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { currencySchema } from '../currency/entity.schema';
import { Intervals } from '../../types/common';

export const subscriptionPlanCycleSchema = entitySchema.extend({
  price: z.number().catch(0),
  interval: z.enum(Intervals).catch('' as Intervals),
  intervalCount: z.number().catch(0),
  chargeLimit: z.number().nullable().catch(null),
  priority: z.number().catch(0),
  currency: currencySchema.catch(() => currencySchema.parse({})),
});
