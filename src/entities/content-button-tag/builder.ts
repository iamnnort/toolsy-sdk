import { EntityDto } from '@src/types';
import { ContentButtonTagEntity } from './entity';
import { ContentButtonTag } from './type';

export class ContentButtonTagBuilder {
  static make(entity?: Partial<ContentButtonTag>, entityDto: EntityDto = {}) {
    return new ContentButtonTagEntity(entity, entityDto);
  }
}
