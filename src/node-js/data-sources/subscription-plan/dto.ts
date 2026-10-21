import { SubscriptionPlan } from '@src/entities/subscription-plan/type';
import { CreateDto, SearchDto, SearchField, SyncDto, UpdateDto, UpdateField } from '@src/types/dto';

export type SubscriptionPlanSearchDto = SearchDto<
  SubscriptionPlan,
  'isInfinite' | 'access' | 'visibility' | 'fixation'
> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  extended?: boolean;
};

export type SubscriptionPlanCreateDto = CreateDto<
  SubscriptionPlan,
  'name' | 'price',
  | 'isInfinite'
  | 'interval'
  | 'intervalCount'
  | 'access'
  | 'visibility'
  | 'fixation'
  | 'closesAt'
  | 'subscriberLimit'
  | 'retryLimit'
  | 'retryInterval'
  | 'retryIntervalCount'
> & {
  productId: string;
  currencyId: string;
};

export type SubscriptionPlanUpdateDto = UpdateDto<
  SubscriptionPlan,
  | 'name'
  | 'price'
  | 'isInfinite'
  | 'interval'
  | 'intervalCount'
  | 'access'
  | 'visibility'
  | 'fixation'
  | 'closesAt'
  | 'subscriberLimit'
  | 'retryLimit'
  | 'retryInterval'
  | 'retryIntervalCount'
  | 'priority'
> & {
  currencyId?: UpdateField<string>;
};

export type SubscriptionPlanSyncDto = SyncDto;
