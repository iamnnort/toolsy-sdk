import { Entity } from '../__entity/type';
import { Space } from '../space/type';
import { Notification } from '../notification/type';

export type AccessPolicy = Entity & {
  expiresAt: string | null;
  notification: Notification;
  space: Space;
};
