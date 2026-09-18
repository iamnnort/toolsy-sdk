import { PromoCode } from '@src/entities/promo-code/type';
import { CreateDto, SearchDto, SearchField, SyncDto, UpdateDto, UpdateField } from '@src/types/dto';

export type PromoCodeSearchDto = SearchDto<PromoCode, 'code' | 'access' | 'visibility'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
};

export type PromoCodeCreateDto = CreateDto<
  PromoCode,
  'code',
  | 'discountPercentage'
  | 'discountAmount'
  | 'usageLimit'
  | 'recurringUsageLimit'
  | 'perUserUsageLimit'
  | 'expiresAt'
  | 'access'
  | 'visibility'
> & {
  projectId: string;
  discountCurrencyId?: string | null;
};

export type PromoCodeUpdateDto = UpdateDto<
  PromoCode,
  | 'discountPercentage'
  | 'discountAmount'
  | 'usageLimit'
  | 'recurringUsageLimit'
  | 'perUserUsageLimit'
  | 'expiresAt'
  | 'access'
  | 'visibility'
  | 'priority'
> & {
  discountCurrencyId?: UpdateField<string>;
};

export type PromoCodeSyncDto = SyncDto;
