import { Entity } from '../__entity/type';
import { Donate } from '../donate/type';
import { Currency } from '../currency/type';
import { PaymentSystem } from '../payment-system/type';
import { PromoCode } from '../promo-code/type';
import { Visit } from '../visit/type';
import { Payment } from '../payment/type';
import { Refund } from '../refund/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type Invoice = Entity & {
  status: InvoiceStatuses;
  price: number;
  totalPrice: number;
  convertedTotalPrice: number;
  exchangeRate: number;
  discountPercentage: number;
  discountAmount: number;
  convertedDiscountAmount: number;
  discountExchangeRate: number;
  comment: string;
  checkoutUrl: string;
  source: InvoiceSources;
  subscriptionPlan: SubscriptionPlan;
  donate: Donate;
  currency: Currency;
  convertedCurrency: Currency;
  discountCurrency: Currency;
  paymentSystem: PaymentSystem;
  promoCode: PromoCode;
  visit: Visit;
  latestPayment: Payment;
  latestRefund: Refund;
};

export enum InvoiceStatuses {
  ALLOCATED = 'allocated',
  CANCELED = 'canceled',
  ENQUEUED = 'enqueued',
  EXPIRED = 'expired',
  PAID = 'paid',
  PENDING = 'pending',
  REFUNDED = 'refunded',
  REJECTED = 'rejected',
  SYSTEM_CANCELED = 'systemCanceled',
  VIEWED = 'viewed',
  WAITING = 'waiting',
}

export enum InvoiceSources {
  ADMINISTRATOR = 'administrator',
  BILLING_PLAN = 'billing_plan',
  CONTENT_BUTTON_ACTION = 'content_button_action',
  LINK = 'link',
  MERCHANT = 'merchant',
  VISIT = 'visit',
}
