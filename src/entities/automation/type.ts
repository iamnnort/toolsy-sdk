import { Intervals, Weekdays } from '../../types/common';
import { Entity } from '../__entity/type';
import { Notification } from '../notification/type';
import { Product } from '../product/type';

export type Automation = Entity & {
  event: AutomationEvents;
  action: AutomationActions;
  lifecycle: AutomationLifecycles;
  interval: Intervals;
  intervalCount: number;
  sendWindowTimeFrom: string;
  sendWindowTimeTo: string;
  sendWindowWeekdays: Weekdays[];
  priority: number;
  product: Product;
  actionNotification: Notification;
};

export enum AutomationEvents {
  BILLING_PLAN_FAILED = 'billing_plan_failed',
  SUBSCRIPTION_EXPIRED = 'subscription_expired',
  SUBSCRIPTION_EXPIRING = 'subscription_expiring',
  SUBSCRIPTION_STARTED = 'subscription_started',
  SUBSCRIPTION_STARTING = 'subscription_starting',
}

export enum AutomationActions {
  SEND_CONTENT = 'send_content',
  SEND_NOTIFICATION = 'send_notification',
}

export enum AutomationLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
