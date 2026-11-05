import { Funnel } from '@src/entities/funnel/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type FunnelSearchDto = SearchDto<Funnel, 'lifecycle'> & {
  projectId?: SearchField<string>;
  folderId?: SearchField<string>;
  triggerFunnelId?: SearchField<string>;
  extended?: boolean;
};

export type FunnelCreateDto = CreateDto<
  Funnel,
  'name',
  'lifecycle' | 'isDefault' | 'isRestartable' | 'hasContentProtection'
> & {
  projectId: string;
  triggerFunnelId?: string;
  folderId?: string | null;
};

export type FunnelUpdateDto = UpdateDto<
  Funnel,
  'name' | 'lifecycle' | 'isDefault' | 'isRestartable' | 'hasContentProtection' | 'priority'
> & {
  triggerFunnelId?: string | null;
  folderId?: UpdateField<string>;
};

export type FunnelPreviewDto = {
  clientId: string;
};
