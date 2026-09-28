import { NotificationSpace } from '@src/entities/notification-space/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type NotificationSpaceSearchDto = SearchDto<NotificationSpace> & {
  projectId?: SearchField<string>;
  notificationId?: SearchField<string>;
  spaceId?: SearchField<string>;
};

export type NotificationSpaceCreateDto = CreateDto<NotificationSpace, never, 'expiresAt'> & {
  notificationId: string;
  spaceId: string;
};

export type NotificationSpaceUpdateDto = UpdateDto<NotificationSpace, 'expiresAt'>;
