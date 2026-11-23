import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Invoice } from '../invoice/type';

export type Refund = Entity & {
  providerToken: string;
  amount: number;
  comment: string;
  currency: Currency;
  invoice: Invoice;
};
