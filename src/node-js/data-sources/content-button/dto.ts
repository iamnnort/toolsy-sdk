import { ContentButton } from '@src/entities/content-button/type';
import { CreateDto, SearchDto, SearchField, SyncDto, UpdateDto } from '@src/types/dto';

export type ContentButtonSearchDto = SearchDto<ContentButton, 'type' | 'style'> & {
  contentId: SearchField<string>;
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
};

export type ContentButtonCreateDto = CreateDto<
  ContentButton,
  'type' | 'title',
  'style' | 'url' | 'isProtectedLink' | 'isDirectLink'
> & {
  contentId: string;
  productId?: string;
  subscriptionPlanId?: string | null;
};

export type ContentButtonUpdateDto = UpdateDto<
  ContentButton,
  'style' | 'priority' | 'title' | 'url' | 'isProtectedLink' | 'isDirectLink'
> & {
  productId?: string;
  subscriptionPlanId?: string | null;
};

export type ContentButtonSyncDto = SyncDto;
