import { EntityDto } from '@src/types';
import { ContentButtonEntities, ContentButtonEntity } from './entity';
import { ContentButton } from './type';

export class ContentButtonBuilder {
  static make(
    entity?: Partial<ContentButton>,
    entityDto: EntityDto = {},
    entities: Partial<ContentButtonEntities> = {},
  ) {
    return new ContentButtonEntity(entity, entityDto, entities);
  }
}
