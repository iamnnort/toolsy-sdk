import { Entity } from '../__entity/type';
import { Command } from '../command/type';
import { Content } from '../content/type';
import { ContentButton } from '../content-button/type';
import { Funnel } from '../funnel/type';
import { Notification } from '../notification/type';
import { Product } from '../product/type';
import { SubscriptionPlan } from '../subscription-plan/type';

export type ContentButtonAction = Entity & {
  type: ContentButtonActionTypes;
  priority: number;
  content: Content;
  contentButton: ContentButton;
  notification: Notification;
  command: Command;
  subscriptionPlan: SubscriptionPlan;
  product: Product;
  funnel: Funnel;
};

export enum ContentButtonActionTypes {
  SEND_NEXT_NOTIFICATION = 'send_next_notification',
  SEND_N_NOTIFICATION = 'send_n_notification',
  REMOVE_NOTIFICATION = 'remove_notification',
  SEND_TEXT = 'send_text',
  SEND_COMMAND = 'send_command',
  ADD_TO_SUBSCRIPTION_PLAN = 'add_to_subscription_plan',
  ADD_TO_FUNNEL = 'add_to_funnel',
  REMOVE_FROM_FUNNEL = 'remove_from_funnel',
  ADD_TAGS = 'add_tags',
  REMOVE_TAGS = 'remove_tags',
}
