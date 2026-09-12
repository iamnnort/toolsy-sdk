import { Visit } from '@src/entities/visit/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type VisitSearchDto = SearchDto<Visit, 'provider' | 'status' | 'joinStatus'> & {
  projectId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
  clientMaxId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
};

export type VisitUpdateDto = UpdateDto<Visit, 'email'>;
