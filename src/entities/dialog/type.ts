import { Entity } from '../__entity/type';
import { Visit } from '../visit/type';
import { DialogNotification } from '../dialog-notification/type';
import { Content } from '../content/type';

export type Dialog = Entity & {
  lifecycle: DialogLifecycles;
  unreadCount: number;
  hasPin: boolean;
  hasMute: boolean;
  visit: Visit;
  latestDialogNotification: DialogNotification;
  latestReadDialogNotification: DialogNotification;
  draftContent: Content;
};

export enum DialogLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
