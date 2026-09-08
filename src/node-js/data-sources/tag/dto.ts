import { Tag } from '@src/entities/tag/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type TagSearchDto = SearchDto<Tag, 'name'> & {
  projectId?: SearchField<string>;
  contentButtonId?: SearchField<string>;
};

export type TagCreateDto = CreateDto<Tag, 'name', never> & {
  projectId: string;
};

export type TagUpdateDto = UpdateDto<Tag, 'name'>;
