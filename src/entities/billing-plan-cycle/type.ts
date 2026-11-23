import { Intervals } from '../../types/common';
import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { PromoCode } from '../promo-code/type';

export type BillingPlanCycle = Entity & {
  priority: number;
  price: number;
  totalPrice: number;
  convertedTotalPrice: number;
  exchangeRate: number;
  interval: Intervals;
  intervalCount: number;
  chargeLimit: number | null;
  chargeCount: number;
  discountPercentage: number;
  discountAmount: number;
  convertedDiscountAmount: number;
  discountExchangeRate: number;
  currency: Currency;
  convertedCurrency: Currency;
  promoCode: PromoCode;
  discountCurrency: Currency;
};
