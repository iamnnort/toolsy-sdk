import { Visit } from '@src/entities/visit/type';
import { SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type VisitSearchDto = SearchDto<Visit, 'status'> & {
  projectId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
};

export type VisitUpdateDto = UpdateDto<Visit, 'email'>;
