import { Entity } from '../__entity/type';
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
  CLIENT = 'client',
  CLIENT_DIRECT_PRODUCT = 'client_direct_product',
  CLIENT_DIRECT_SUBSCRIPTION_PLAN = 'client_direct_subscription_plan',
  INVOICE = 'invoice',
  MERCHANT = 'merchant',
  SUBSCRIPTION = 'subscription',
}
