import { Entity } from '../__entity/type';

export type PromoCode = Entity & {
  name: string;
  access: PromoCodeAccesses;
  visibility: PromoCodeVisibilities;
  discountPercent: number;
  discountAmount: number;
  maxQuantity: number;
  maxQuantityIsInfinite: boolean;
  maxRecurringQuantity: number;
  maxRecurringQuantityIsInfinite: boolean;
  maxUsedQuantity: number;
  maxUsedQuantityIsInfinite: boolean;
  expiredAt: string;
  isInfinite: boolean;
};

export enum PromoCodeAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}

export enum PromoCodeVisibilities {
  CUSTOMERS = 'customers',
  EVERYONE = 'everyone',
  LAPSED = 'lapsed',
  PROSPECTS = 'prospects',
  SUBSCRIBERS = 'subscribers',
  WINBACK = 'winback',
}
