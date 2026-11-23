import { Entity } from '../__entity/type';
import { SubscriptionPlan } from '../subscription-plan/type';
import { PaymentSystem } from '../payment-system/type';
import { Visit } from '../visit/type';
import { BillingPlanCycle } from '../billing-plan-cycle/type';

export type BillingPlan = Entity & {
  status: BillingPlanStatuses;
  systemStatus: BillingPlanSystemStatuses | null;
  retryCount: number;
  isProviderScheduled: boolean;
  nextChargeAt: string;
  subscriptionPlan: SubscriptionPlan;
  paymentSystem: PaymentSystem;
  visit: Visit;
  billingPlanCycle: BillingPlanCycle;
};

export enum BillingPlanStatuses {
  CREATED = 'created',
  ACTIVE = 'active',
  PENDING = 'pending',
  PAST_DUE = 'past_due',
  EXPIRED = 'expired',
  CANCELED = 'canceled',
}

export enum BillingPlanSystemStatuses {
  CANCELING = 'canceling',
}
