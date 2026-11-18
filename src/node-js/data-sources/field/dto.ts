import { Field } from '@src/entities/field/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type FieldSearchDto = SearchDto<Field, 'type'> & {
  projectId?: SearchField<string>;
};

export type FieldCreateDto = CreateDto<Field, 'name' | 'type', never> & {
  projectId: string;
};

export type FieldUpdateDto = UpdateDto<Field, 'name' | 'type'>;
