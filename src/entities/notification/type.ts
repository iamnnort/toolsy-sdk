import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Funnel } from '../funnel/type';
import { Product } from '../product/type';

export type Notification = Entity & {
  type: NotificationTypes;
  name: string;
  lifecycle: NotificationLifecycles;
  event: NotificationEvents;
  offset: number;
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
