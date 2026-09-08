import { EntityEntity } from '../__entity/entity';
import { ContentButtonTag } from './type';
import { EntityDto } from '../type';
import { contentButtonTagSchema } from './entity.schema';

export class ContentButtonTagEntity extends EntityEntity<ContentButtonTag> {
  constructor(entity?: Partial<ContentButtonTag>, entityDto: EntityDto = {}) {
    super(contentButtonTagSchema, entity, entityDto);
  }
}
