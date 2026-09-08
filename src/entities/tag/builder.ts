import { EntityDto } from '@src/types';
import { TagEntity } from './entity';
import { Tag } from './type';

export class TagBuilder {
  static make(entity?: Partial<Tag>, entityDto: EntityDto = {}) {
    return new TagEntity(entity, entityDto);
  }
}
