import { Entity } from '../__entity/type';
import { Funnel } from '../funnel/type';
import { Product } from '../product/type';
import { PromoCode } from '../promo-code/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type Link = Entity & {
  type: LinkTypes;
  name: string;
  priority: number;
  tgToken: string;
  maxToken: string;
  webToken: string;
  usageLimit: number | null;
  expiresAt: string | null;
  product: Product | null;
  subscriptionPlan: SubscriptionPlan | null;
  funnel: Funnel | null;
  promoCode: PromoCode | null;
};

export type LinkMetrics = {
  usageCount: {
    count: number;
  };
};

export enum LinkTypes {
  PRODUCT_PAYMENT = 'product_payment',
  SUBSCRIPTION_PLAN_PAYMENT = 'subscription_plan_payment',
  SUBSCRIPTION_PLAN_GRANT = 'subscription_plan_grant',
  SUBSCRIPTION_PLAN_PREPAID = 'subscription_plan_prepaid',
  PROMO_CODE_PAYMENT = 'promo_code_payment',
  FUNNEL_START = 'funnel_start',
}
