import { Intervals } from '../../types/common';
import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Product } from '../product/type';

export type SubscriptionPlan = Entity & {
  name: string;
  price: number;
  isInfinite: boolean;
  closesAt: string;
  subscriberLimit: number;
  interval: Intervals;
  intervalCount: number;
  access: SubscriptionPlanAccesses;
  visibility: SubscriptionPlanVisibilities;
  fixation: SubscriptionPlanFixations;
  product: Product;
  currency: Currency;
};

export enum SubscriptionPlanAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}

export enum SubscriptionPlanVisibilities {
  CUSTOMERS = 'customers',
  EVERYONE = 'everyone',
  LAPSED = 'lapsed',
  PROSPECTS = 'prospects',
  SUBSCRIBERS = 'subscribers',
  WINBACK = 'winback',
}

export enum SubscriptionPlanFixations {
  CLIENT_PRICE = 'client_price',
  DISABLED = 'disabled',
  SUBSCRIPTION_PLAN = 'subscription_plan',
  SUBSCRIPTION_PLAN_PRICE = 'subscription_plan_price',
}
