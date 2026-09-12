import { Client } from '@src/entities/client/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type ClientSearchDto = SearchDto<Client, 'tgId' | 'maxId' | 'status'> & {
  projectId?: SearchField<string>;
};

export type ClientUpdateDto = UpdateDto<Client, 'email'>;
