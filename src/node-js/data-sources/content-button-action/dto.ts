import { ContentButtonAction } from '@src/entities/content-button-action/type';
import { CreateDto, SearchDto, SearchField, SyncDto, UpdateDto } from '@src/types/dto';

export type ContentButtonActionSearchDto = SearchDto<ContentButtonAction, 'type'> & {
  contentButtonId: SearchField<string>;
  projectId?: SearchField<string>;
  contentId?: SearchField<string>;
  notificationId?: SearchField<string>;
  commandId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
  productId?: SearchField<string>;
  funnelId?: SearchField<string>;
  tagId?: SearchField<string>;
};

export type ContentButtonActionCreateDto = CreateDto<ContentButtonAction, 'type', 'priority'> & {
  contentButtonId: string;
  contentText?: string;
  notificationId?: string;
  commandId?: string;
  subscriptionPlanId?: string;
  productId?: string;
  funnelId?: string;
};

export type ContentButtonActionUpdateDto = UpdateDto<ContentButtonAction, 'type' | 'priority'> & {
  notificationId?: string | null;
  commandId?: string | null;
  subscriptionPlanId?: string | null;
  productId?: string | null;
  funnelId?: string | null;
};

export type ContentButtonActionSyncDto = SyncDto;
