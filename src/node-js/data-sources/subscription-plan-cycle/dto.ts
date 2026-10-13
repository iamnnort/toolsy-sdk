import { SubscriptionPlanCycle } from '@src/entities/subscription-plan-cycle/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type SubscriptionPlanCycleSearchDto = SearchDto<SubscriptionPlanCycle> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
};

export type SubscriptionPlanCycleCreateDto = CreateDto<
  SubscriptionPlanCycle,
  'price' | 'interval' | 'intervalCount',
  'chargeLimit' | 'priority'
> & {
  subscriptionPlanId: string;
  currencyId: string;
};

export type SubscriptionPlanCycleUpdateDto = UpdateDto<
  SubscriptionPlanCycle,
  'price' | 'interval' | 'intervalCount' | 'chargeLimit' | 'priority'
> & {
  currencyId?: UpdateField<string>;
};
