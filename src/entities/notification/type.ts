import { Intervals, Weekdays } from '../../types/common';
import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Funnel } from '../funnel/type';
import { Product } from '../product/type';

export type Notification = Entity & {
  type: NotificationTypes;
  name: string;
  lifecycle: NotificationLifecycles;
  event: NotificationEvents;
  intervalOrigin: NotificationIntervalOrigins;
  interval: Intervals;
  intervalCount: number;
  editInterval: Intervals;
  editIntervalCount: number;
  isScheduledSkipIfOverdue: boolean;
  scheduledAt: string;
  sendWindowTimeFrom: string;
  sendWindowTimeTo: string;
  sendWindowWeekdays: Weekdays[];
  priority: number;
  isProtectedContent: boolean;
  isLinkPreviewEnabled: boolean;
  content: Content;
  product: Product;
  funnel: Funnel;
};

export enum NotificationTypes {
  CHAT = 'chat',
  MESSAGE = 'message',
}

export enum NotificationLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

export enum NotificationEvents {
  ACTION = 'action',
  AUTOMATION = 'automation',
  NEVER = 'never',
  SCHEDULE = 'schedule',
}

export enum NotificationIntervalOrigins {
  NOTIFICATION = 'notification_sent',
  SUBSCRIPTION_START = 'subscription_started',
}
