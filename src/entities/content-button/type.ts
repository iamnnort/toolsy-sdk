import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Product } from '../product/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type ContentButton = Entity & {
  type: ContentButtonTypes;
  style: ContentButtonStyles;
  priority: number;
  title: string;
  url: string;
  redirectUrl: string;
  isProtectedLink: boolean;
  isDirectLink: boolean;
  content: Content;
  product: Product;
  subscriptionPlan: SubscriptionPlan;
};

export enum ContentButtonTypes {
  ACTION = 'action',
  LINK = 'link',
  PAYMENT = 'payment',
}

export enum ContentButtonStyles {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DANGER = 'danger',
  SUCCESS = 'success',
}
