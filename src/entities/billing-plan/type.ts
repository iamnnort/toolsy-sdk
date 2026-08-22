import { Entity } from '../__entity/type';

export type BillingPlan = Entity & {
  status: BillingPlanStatuses;
  billingPlanCycleAt: string;
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
