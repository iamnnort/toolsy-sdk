import { Content } from '@src/entities/content/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type ContentSearchDto = SearchDto<Content> & {
  subscriptionPlanId?: SearchField<string>;
};

export type ContentUpdateDto = UpdateDto<Content, 'title' | 'text'>;
