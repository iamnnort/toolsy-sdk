import { Notification } from '@src/entities/notification/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type NotificationSearchDto = SearchDto<Notification, 'type' | 'event'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  funnelId?: SearchField<string>;
  extended?: boolean;
};

export type NotificationCreateDto = CreateDto<
  Notification,
  'type' | 'name',
  | 'lifecycle'
  | 'event'
  | 'period'
  | 'periodCount'
  | 'interval'
  | 'intervalCount'
  | 'editInterval'
  | 'editIntervalCount'
  | 'isScheduledSkipIfOverdue'
  | 'scheduledAt'
  | 'sendWindowTimeFrom'
  | 'sendWindowTimeTo'
  | 'sendWindowWeekdays'
  | 'isProtectedContent'
  | 'isLinkPreviewEnabled'
> & {
  contentText?: string;
} & (
    | {
        productId: string;
        funnelId?: string;
      }
    | {
        productId?: string;
        funnelId: string;
      }
  );

export type NotificationUpdateDto = UpdateDto<
  Notification,
  | 'name'
  | 'lifecycle'
  | 'event'
  | 'period'
  | 'periodCount'
  | 'interval'
  | 'intervalCount'
  | 'editInterval'
  | 'editIntervalCount'
  | 'isScheduledSkipIfOverdue'
  | 'scheduledAt'
  | 'sendWindowTimeFrom'
  | 'sendWindowTimeTo'
  | 'sendWindowWeekdays'
  | 'priority'
  | 'isProtectedContent'
  | 'isLinkPreviewEnabled'
>;
