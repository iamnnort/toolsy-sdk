import { Entity } from '../__entity/type';

export type Subscription = Entity & {
  isInfinite: boolean;
  startedAt: string;
  expiredAt: string;
  status: SubscriptionStatuses;
};

export enum SubscriptionStatuses {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  DELAYED = 'delayed',
  EXPIRED = 'expired',
}
