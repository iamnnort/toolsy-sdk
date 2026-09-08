import { Content } from '@src/entities/content/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type ContentSearchDto = SearchDto<Content> & {
  projectId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
  notificationId?: SearchField<string>;
};

export type ContentUpdateDto = UpdateDto<Content, 'title' | 'text'>;
