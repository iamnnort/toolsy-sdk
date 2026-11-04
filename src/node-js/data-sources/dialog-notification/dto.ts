import { DialogNotification } from '@src/entities/dialog-notification/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type DialogNotificationSearchDto = SearchDto<DialogNotification, 'event' | 'status'> & {
  dialogId?: SearchField<string>;
  extended?: boolean;
};

export type DialogNotificationCreateContentDto = {
  text?: string;
};

export type DialogNotificationCreateDto = {
  dialogId: string;
  content?: DialogNotificationCreateContentDto;
  replyToDialogNotificationId?: string | null;
};
