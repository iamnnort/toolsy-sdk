import { EntityDto } from '@src/types';
import { ContentEntity } from './entity';
import { Content } from './type';

export class ContentBuilder {
  static make(entity?: Partial<Content>, entityDto: EntityDto = {}) {
    return new ContentEntity(entity, entityDto);
  }
}
