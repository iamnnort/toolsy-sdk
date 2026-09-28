import { Space } from '@src/entities/space/type';
import { BotProviders } from '@src/types/common';
import { SearchDto, SearchField } from '@src/types/dto';

export type SpaceSearchDto = SearchDto<Space> & {
  projectId?: SearchField<string>;
  chatProvider?: SearchField<BotProviders>;
};
