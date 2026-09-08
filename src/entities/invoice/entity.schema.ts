import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { InvoiceStatuses, InvoiceSources } from './type';

export const invoiceSchema = entitySchema.extend({
  status: z.enum(InvoiceStatuses).catch('' as InvoiceStatuses),
  price: z.number().catch(0),
  totalPrice: z.number().catch(0),
  convertedTotalPrice: z.number().catch(0),
  exchangeRate: z.number().catch(0),
  discountPercent: z.number().catch(0),
  discountAmount: z.number().catch(0),
  convertedDiscountAmount: z.number().catch(0),
  discountExchangeRate: z.number().catch(0),
  comment: z.string().catch(''),
  checkoutUrl: z.string().catch(''),
  source: z.enum(InvoiceSources).catch('' as InvoiceSources),
});
