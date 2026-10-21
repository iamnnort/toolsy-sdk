import { Product } from '@src/entities/product/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type ProductSearchDto = SearchDto<Product, 'access'> & {
  projectId?: SearchField<string>;
  folderId?: SearchField<string>;
  extended?: boolean;
};

export type ProductCreateDto = CreateDto<
  Product,
  'name',
  'access' | 'isRestartable' | 'hasContentProtection' | 'isLessonVisible' | 'isLessonNameVisible'
> & {
  projectId: string;
  folderId?: string | null;
};

export type ProductUpdateDto = UpdateDto<
  Product,
  'name' | 'access' | 'isRestartable' | 'hasContentProtection' | 'isLessonVisible' | 'isLessonNameVisible' | 'priority'
> & {
  folderId?: UpdateField<string>;
};
