import { Entity } from '../__entity/type';
import { Donate } from '../donate/type';
import { Currency } from '../currency/type';
import { PaymentSystem } from '../payment-system/type';
import { PromoCode } from '../promo-code/type';
import { Visit } from '../visit/type';
import { Payment } from '../payment/type';
import { Refund } from '../refund/type';
import { SubscriptionPlan } from '../subscription-plan/type';
import { Link } from '../link/type';
import { ContentButtonAction } from '../content-button-action/type';

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
  expiresAt: string;
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
  link: Link;
  contentButtonAction: ContentButtonAction;
};

export enum InvoiceStatuses {
  CANCELED = 'canceled',
  ENQUEUED = 'enqueued',
  EXPIRED = 'expired',
  FAILED = 'failed',
  OPEN = 'open',
  PAID = 'paid',
  PENDING = 'pending',
  PROCESSING = 'processing',
  REFUNDED = 'refunded',
  REJECTED = 'rejected',
  REVIEWING = 'reviewing',
  REVOKED = 'revoked',
}

export enum InvoiceSources {
  ADMINISTRATOR = 'administrator',
  BILLING_PLAN = 'billing_plan',
  CONTENT_BUTTON_ACTION = 'content_button_action',
  LINK = 'link',
  MERCHANT = 'merchant',
  VISIT = 'visit',
}
