import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Invoice } from '../invoice/type';

export type Payment = Entity & {
  providerToken: string;
  fundingSource: PaymentFundingSources;
  amountNet: number;
  amountGross: number;
  amountFee: number;
  exchangeRate: number;
  currency: Currency;
  invoice: Invoice;
};

export enum PaymentFundingSources {
  PAYMENT_SYSTEM = 'payment_system',
  REFERRAL_PROGRAM_BALANCE = 'referral_program_balance',
}
