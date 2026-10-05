import { EntityEntity } from '../__entity/entity';
import { Product } from './type';
import { EntityDto } from '../type';
import { productSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
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

  isRestartable() {
    return this.entity.isRestartable;
  }

  hasContentProtection() {
    return this.entity.hasContentProtection;
  }

  isLessonVisible() {
    return this.entity.isLessonVisible;
  }

  isLessonNameVisible() {
    return this.entity.isLessonNameVisible;
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
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
