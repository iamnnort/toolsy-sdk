import { Asset } from '@src/entities/asset/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type AssetSearchDto = SearchDto<Asset, 'type' | 'provider'> & {
  contentId: SearchField<string>;
  projectId?: SearchField<string>;
};

export type AssetCreateDto = CreateDto<
  Asset,
  'type' | 'provider' | 'providerId',
  'name' | 'size' | 'width' | 'height' | 'duration' | 'mimeType' | 'url' | 'hasSpoiler' | 'hasCaption'
> & {
  contentId: string;
};

export type AssetUpdateDto = UpdateDto<
  Asset,
  | 'type'
  | 'provider'
  | 'priority'
  | 'providerId'
  | 'name'
  | 'size'
  | 'width'
  | 'height'
  | 'duration'
  | 'mimeType'
  | 'url'
  | 'hasSpoiler'
  | 'hasCaption'
>;
