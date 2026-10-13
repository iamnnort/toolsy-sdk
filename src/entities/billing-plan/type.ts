import { Entity } from '../__entity/type';
import { SubscriptionPlan } from '../subscription-plan/type';
import { PaymentSystem } from '../payment-system/type';
import { Visit } from '../visit/type';
import { BillingPlanCycle } from '../billing-plan-cycle/type';

export type BillingPlan = Entity & {
  status: BillingPlanStatuses;
  billingPlanCycleAt: string;
  subscriptionPlan: SubscriptionPlan;
  paymentSystem: PaymentSystem;
  visit: Visit;
  billingPlanCycle: BillingPlanCycle;
};

export enum BillingPlanStatuses {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  CANCELING = 'canceling',
  ENQUEUED = 'enqueued',
  EXPIRED = 'expired',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
}
