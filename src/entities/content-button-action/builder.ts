import { EntityDto } from '@src/types';
import { ContentButtonActionEntity } from './entity';
import { ContentButtonAction } from './type';

export class ContentButtonActionBuilder {
  static make(entity?: Partial<ContentButtonAction>, entityDto: EntityDto = {}) {
    return new ContentButtonActionEntity(entity, entityDto);
  }
}
