import { Entity } from '../__entity/type';

export type Refund = Entity & {
  providerToken: string;
  status: RefundStatuses;
  amount: number;
  comment: string;
};

export enum RefundStatuses {
  COMPLETED = 'completed',
  DECLINED = 'declined',
  FAILED = 'failed',
  PENDING = 'pending',
}
