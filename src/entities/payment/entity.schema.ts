import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { PaymentStatuses } from './type';

export const paymentSchema = entitySchema.extend({
  providerToken: z.string().catch(''),
  status: z.enum(PaymentStatuses).catch('' as PaymentStatuses),
  amountNet: z.number().catch(0),
  amountGross: z.number().catch(0),
  amountFee: z.number().catch(0),
  exchangeRate: z.number().catch(0),
});
