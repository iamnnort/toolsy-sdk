import { Entity } from '../__entity/type';
import { Client } from '../client/type';
import { Invoice } from '../invoice/type';
import { Payment } from '../payment/type';
import { Refund } from '../refund/type';
import { Visit } from '../visit/type';

export type Activity = Entity & {
  type: ActivityTypes;
  status: string;
  prevStatus: string;
  visit: Visit;
  client: Client;
  invoice: Invoice;
  payment: Payment;
  refund: Refund;
};

export enum ActivityTypes {
  VISIT_CREATED = 'visit_created',
  VISIT_STATUS_UPDATED = 'visit_status_updated',
  VISIT_REMOVED = 'visit_removed',
  INVOICE_CREATED = 'invoice_created',
  INVOICE_STATUS_UPDATED = 'invoice_status_updated',
  INVOICE_REMOVED = 'invoice_removed',
  PAYMENT_CREATED = 'payment_created',
  PAYMENT_REMOVED = 'payment_removed',
  REFUND_CREATED = 'refund_created',
  REFUND_REMOVED = 'refund_removed',
}
