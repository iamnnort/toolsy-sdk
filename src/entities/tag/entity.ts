import { EntityEntity } from '../__entity/entity';
import { Tag } from './type';
import { EntityDto } from '../type';
import { tagSchema } from './entity.schema';
import { StringBuilder } from '../__string';

export class TagEntity extends EntityEntity<Tag> {
  constructor(entity?: Partial<Tag>, entityDto: EntityDto = {}) {
    super(tagSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }
}
