import { Funnel } from '@src/entities/funnel/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type FunnelSearchDto = SearchDto<Funnel, 'lifecycle'> & {
  projectId?: SearchField<string>;
};

export type FunnelCreateDto = CreateDto<
  Funnel,
  'name',
  'lifecycle' | 'isDefault' | 'isRestartable' | 'isProtectedContent'
> & {
  projectId: string;
};

export type FunnelUpdateDto = UpdateDto<
  Funnel,
  'name' | 'lifecycle' | 'isDefault' | 'isRestartable' | 'isProtectedContent'
>;
