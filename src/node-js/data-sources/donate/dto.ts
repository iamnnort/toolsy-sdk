import { Donate } from '@src/entities/donate/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type DonateSearchDto = SearchDto<Donate> & {
  projectId?: SearchField<string>;
};
