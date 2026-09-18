import { Invoice } from '@src/entities/invoice/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type InvoiceSearchDto = SearchDto<Invoice, 'status' | 'source'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
  paymentSystemId?: SearchField<string>;
  promoCodeId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
};

export type InvoiceCreateClientDto = {
  tgId: string;
};

export type InvoiceCreateDto = {
  subscriptionPlanId: string;
  paymentSystemId: string;
  visitId?: string | null;
  clientId?: string | null;
  client?: InvoiceCreateClientDto;
};
