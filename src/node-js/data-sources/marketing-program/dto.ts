import { MarketingProgram } from '@src/entities/marketing-program/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type MarketingProgramSearchDto = SearchDto<MarketingProgram, 'name'> & {
  projectId?: SearchField<string>;
};
