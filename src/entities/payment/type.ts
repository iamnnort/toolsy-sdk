import { Entity } from '../__entity/type';

export type Payment = Entity & {
  providerToken: string;
  source: PaymentSources;
  status: PaymentStatuses;
  amountNet: number;
  amountGross: number;
  amountFee: number;
  exchangeRate: number;
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
