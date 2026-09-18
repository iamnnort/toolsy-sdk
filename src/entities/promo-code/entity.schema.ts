import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { currencySchema } from '../currency/entity.schema';
import { PromoCodeAccesses, PromoCodeVisibilities } from './type';

export const promoCodeSchema = entitySchema.extend({
  code: z.string().catch(''),
  access: z.enum(PromoCodeAccesses).catch('' as PromoCodeAccesses),
  visibility: z.enum(PromoCodeVisibilities).catch('' as PromoCodeVisibilities),
  discountPercentage: z.number().nullable().catch(null),
  discountAmount: z.number().nullable().catch(null),
  usageLimit: z.number().nullable().catch(null),
  recurringUsageLimit: z.number().nullable().catch(null),
  perUserUsageLimit: z.number().nullable().catch(null),
  expiresAt: z.string().nullable().catch(null),
  priority: z.number().catch(0),
  discountCurrency: currencySchema.catch(() => currencySchema.parse({})),
});
