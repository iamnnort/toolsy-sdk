import { Automation } from '@src/entities/automation/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type AutomationSearchDto = SearchDto<Automation, 'event' | 'action' | 'lifecycle'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  notificationId?: SearchField<string>;
  extended?: boolean;
};

export type AutomationCreateDto = CreateDto<
  Automation,
  'event' | 'action',
  'lifecycle' | 'interval' | 'intervalCount' | 'sendWindowTimeFrom' | 'sendWindowTimeTo' | 'sendWindowWeekdays'
> & {
  productId: string;
  actionNotificationId?: string | null;
  actionNotificationName?: string;
  actionNotificationContentText?: string;
};

export type AutomationUpdateDto = UpdateDto<
  Automation,
  | 'event'
  | 'action'
  | 'lifecycle'
  | 'interval'
  | 'intervalCount'
  | 'sendWindowTimeFrom'
  | 'sendWindowTimeTo'
  | 'sendWindowWeekdays'
  | 'priority'
> & {
  actionNotificationId?: UpdateField<string>;
};
