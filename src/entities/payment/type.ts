import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Invoice } from '../invoice/type';

export type Payment = Entity & {
  providerToken: string;
  source: PaymentSources;
  status: PaymentStatuses;
  amountNet: number;
  amountGross: number;
  amountFee: number;
  exchangeRate: number;
  currency: Currency;
  invoice: Invoice;
};

export enum PaymentStatuses {
  COMPLETED = 'completed',
  DECLINED = 'declined',
  FAILED = 'failed',
  PENDING = 'pending',
  REFUNDED = 'refunded',
}

export enum PaymentSources {
  PAYMENT_SYSTEM = 'payment_system',
  REFERRAL_PROGRAM = 'referral_program',
}
