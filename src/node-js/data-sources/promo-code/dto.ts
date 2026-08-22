import { PromoCode } from '@src/entities/promo-code/type';
import { CreateDto, SearchDto, SearchField } from '@src/types/dto';

export type PromoCodeSearchDto = SearchDto<PromoCode, 'name' | 'access' | 'visibility'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
};

export type PromoCodeCreateDto = CreateDto<
  PromoCode,
  'name',
  | 'discountPercent'
  | 'discountAmount'
  | 'maxQuantity'
  | 'maxQuantityIsInfinite'
  | 'maxUsedQuantity'
  | 'maxUsedQuantityIsInfinite'
  | 'maxRecurringQuantity'
  | 'maxRecurringQuantityIsInfinite'
  | 'expiredAt'
  | 'isInfinite'
  | 'access'
  | 'visibility'
> & {
  productId: string;
  subscriptionPlanIds: string[];
  discountCurrencyId?: string;
};
