import { EntityEntity } from '../__entity/entity';
import { Product } from './type';
import { EntityDto } from '../type';
import { productSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { ContentBuilder } from '../content';

export class ProductEntity extends EntityEntity<Product> {
  constructor(entity?: Partial<Product>, entityDto: EntityDto = {}) {
    super(productSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getAccess() {
    return EnumBuilder.make(this.entity.access);
  }

  isRestartEnabled() {
    return this.entity.isRestartEnabled;
  }

  isProtectedContent() {
    return this.entity.isProtectedContent;
  }

  getProjectId() {
    return this.entity.project?.id;
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getContent() {
    return ContentBuilder.make(this.entity.content);
  }
}
