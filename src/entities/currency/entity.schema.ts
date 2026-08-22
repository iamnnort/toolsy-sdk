import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { CurrencyCodes } from './type';

export const currencySchema = entitySchema.extend({
  code: z.enum(CurrencyCodes).catch('' as CurrencyCodes),
  symbol: z.string().catch(''),
  exp: z.number().catch(2),
  usdExchangeRate: z.number().catch(1),
});
