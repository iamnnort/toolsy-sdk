import { EntityDto } from '@src/types';
import { ContentButtonEntity } from './entity';
import { ContentButton } from './type';

export class ContentButtonBuilder {
  static make(entity?: Partial<ContentButton>, entityDto: EntityDto = {}) {
    return new ContentButtonEntity(entity, entityDto);
  }
}
