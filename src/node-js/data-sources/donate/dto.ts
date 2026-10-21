import { Donate } from '@src/entities/donate/type';
import { SearchDto, SearchField, SyncDto } from '@src/types/dto';

export type DonateSearchDto = SearchDto<Donate> & {
  projectId?: SearchField<string>;
};

export type DonateSyncDto = SyncDto;
