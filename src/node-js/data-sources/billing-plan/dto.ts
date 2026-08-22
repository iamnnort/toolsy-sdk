import { BillingPlan } from '@src/entities/billing-plan/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type BillingPlanSearchDto = SearchDto<BillingPlan, 'status'> & {
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
