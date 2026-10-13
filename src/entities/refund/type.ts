import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Invoice } from '../invoice/type';

export type Refund = Entity & {
  providerToken: string;
  status: RefundStatuses;
  amount: number;
  comment: string;
  currency: Currency;
  invoice: Invoice;
};

export enum RefundStatuses {
  COMPLETED = 'completed',
  DECLINED = 'declined',
  FAILED = 'failed',
  PENDING = 'pending',
}
