import { Entity } from '../__entity/type';
import { Notification } from '../notification/type';

export type Content = Entity & {
  title: string;
  text: string;
  notification: Notification;
};
