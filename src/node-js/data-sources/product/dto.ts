import { Product } from '@src/entities/product/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type ProductSearchDto = SearchDto<Product, 'access'> & {
  projectId?: SearchField<string>;
  extended?: boolean;
};

export type ProductCreateDto = CreateDto<Product, 'name', 'access' | 'isRestartEnabled' | 'isProtectedContent'> & {
  projectId: string;
};

export type ProductUpdateDto = UpdateDto<Product, 'name' | 'access' | 'isRestartEnabled' | 'isProtectedContent'>;
