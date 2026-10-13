import { Entity } from '../__entity/type';
import { Visit } from '../visit/type';
import { Invoice } from '../invoice/type';

export type Subscription = Entity & {
  isInfinite: boolean;
  startedAt: string;
  expiredAt: string;
  status: SubscriptionStatuses;
  visit: Visit;
  latestInvoice: Invoice;
};

export enum SubscriptionStatuses {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  DELAYED = 'delayed',
  EXPIRED = 'expired',
}
