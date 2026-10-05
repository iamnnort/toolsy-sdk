import { Entity } from '../__entity/type';
import { Product } from '../product/type';
import { Space } from '../space/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type ContentButton = Entity & {
  type: ContentButtonTypes;
  style: ContentButtonStyles;
  priority: number;
  title: string;
  url: string;
  redirectUrl: string;
  joinUrl: string;
  isProtectedLink: boolean;
  isDirectLink: boolean;
  product: Product;
  subscriptionPlan: SubscriptionPlan;
  space: Space;
};

export enum ContentButtonTypes {
  ACTION = 'action',
  LINK = 'link',
  PAYMENT = 'payment',
  ACCESS = 'access',
}

export enum ContentButtonStyles {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DANGER = 'danger',
  SUCCESS = 'success',
}
