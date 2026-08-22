import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { PaymentSystemProviders, TaxationSystems, Vats } from './type';

export const paymentSystemSchema = entitySchema.extend({
  name: z.string().catch(''),
  provider: z.enum(PaymentSystemProviders).catch('' as PaymentSystemProviders),
  taxation: z.enum(TaxationSystems).catch('' as TaxationSystems),
  vat: z.enum(Vats).catch('' as Vats),
});
