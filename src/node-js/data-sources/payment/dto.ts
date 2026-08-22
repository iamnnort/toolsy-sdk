import { Payment } from '@src/entities/payment/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type PaymentSearchDto = SearchDto<Payment, 'status'> & {
  projectId?: SearchField<string>;
  invoiceId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
  paymentSystemId?: SearchField<string>;
  promoCodeId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
};
