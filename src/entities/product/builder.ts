import { EntityDto } from '@src/types';
import { ProductEntity } from './entity';
import { Product } from './type';

export class ProductBuilder {
  static make(entity?: Partial<Product>, entityDto: EntityDto = {}) {
    return new ProductEntity(entity, entityDto);
  }
}
