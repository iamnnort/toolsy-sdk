import { Intervals } from '../../types/common';
import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type SubscriptionPlanCycle = Entity & {
  price: number;
  interval: Intervals;
  intervalCount: number;
  chargeLimit: number | null;
  priority: number;
  subscriptionPlan: SubscriptionPlan;
  currency: Currency;
};
