import { SubscriptionPlan } from '@src/entities/subscription-plan/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type SubscriptionPlanSearchDto = SearchDto<
  SubscriptionPlan,
  'isInfinite' | 'access' | 'visibility' | 'fixation'
> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
};

export type SubscriptionPlanCreateDto = CreateDto<
  SubscriptionPlan,
  'name' | 'price',
  'isInfinite' | 'interval' | 'intervalCount' | 'access' | 'visibility' | 'fixation'
> & {
  productId: string;
  currencyId: string;
};

export type SubscriptionPlanUpdateDto = UpdateDto<
  SubscriptionPlan,
  'name' | 'price' | 'isInfinite' | 'interval' | 'intervalCount' | 'access' | 'visibility' | 'fixation'
> & {
  currencyId?: UpdateField<string>;
};
