import { DialogNotification } from '@src/entities/dialog-notification/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type DialogNotificationSearchDto = SearchDto<DialogNotification, 'event' | 'status'> & {
  dialogId?: SearchField<string>;
  projectId?: SearchField<string>;
  visitId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
  clientMaxId?: SearchField<string>;
  replyToDialogNotificationId?: SearchField<string>;
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
