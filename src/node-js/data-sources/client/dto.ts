import { Client } from '@src/entities/client/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type ClientSearchDto = SearchDto<Client, 'tgId'> & {
  projectId?: SearchField<string>;
};

export type ClientUpdateDto = UpdateDto<Client, 'email'>;
