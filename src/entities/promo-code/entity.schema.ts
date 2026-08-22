import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { PromoCodeAccesses, PromoCodeVisibilities } from './type';

export const promoCodeSchema = entitySchema.extend({
  name: z.string().catch(''),
  access: z.enum(PromoCodeAccesses).catch('' as PromoCodeAccesses),
  visibility: z.enum(PromoCodeVisibilities).catch('' as PromoCodeVisibilities),
  discountPercent: z.number().catch(0),
  discountAmount: z.number().catch(0),
  maxQuantity: z.number().catch(0),
  maxQuantityIsInfinite: z.boolean().catch(false),
  maxRecurringQuantity: z.number().catch(0),
  maxRecurringQuantityIsInfinite: z.boolean().catch(false),
  maxUsedQuantity: z.number().catch(0),
  maxUsedQuantityIsInfinite: z.boolean().catch(false),
  expiredAt: z.string().catch(''),
  isInfinite: z.boolean().catch(false),
  usedQuantity: z.number().catch(0),
  paidQuantity: z.number().catch(0),
});
