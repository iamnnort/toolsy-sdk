import { Entity } from '../__entity/type';
import { PaymentSystem } from '../payment-system/type';
import { Product } from '../product/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type Content = Entity & {
  title: string;
  text: string;
  product: Product;
  subscriptionPlan: SubscriptionPlan;
  paymentSystem: PaymentSystem;
};
