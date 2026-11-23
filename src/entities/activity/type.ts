import { Entity } from '../__entity/type';
import { BillingPlan } from '../billing-plan/type';
import { Client } from '../client/type';
import { Invoice } from '../invoice/type';
import { Payment } from '../payment/type';
import { Refund } from '../refund/type';
import { Visit } from '../visit/type';

export type Activity = Entity & {
  type: ActivityTypes;
  status: string;
  prevStatus: string;
  value: string;
  prevValue: string;
  visit: Visit;
  client: Client;
  invoice: Invoice;
  payment: Payment;
  refund: Refund;
  billingPlan: BillingPlan;
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
  BILLING_PLAN_CREATED = 'billing_plan_created',
  BILLING_PLAN_STATUS_UPDATED = 'billing_plan_status_updated',
  BILLING_PLAN_RESCHEDULED = 'billing_plan_rescheduled',
  BILLING_PLAN_REMOVED = 'billing_plan_removed',
}
