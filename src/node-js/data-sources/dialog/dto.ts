import { Dialog } from '@src/entities/dialog/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type DialogSearchDto = SearchDto<Dialog, 'lifecycle' | 'hasPin' | 'hasMute'> & {
  projectId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
  clientMaxId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
  extended?: boolean;
};

export type DialogCreateDto = CreateDto<Dialog, never, 'lifecycle' | 'hasPin' | 'hasMute'> & {
  visitId: string;
};

export type DialogUpdateDto = UpdateDto<Dialog, 'lifecycle' | 'hasPin' | 'hasMute'>;
