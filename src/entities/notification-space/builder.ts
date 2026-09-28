import { EntityDto } from '@src/types';
import { NotificationSpaceEntity } from './entity';
import { NotificationSpace } from './type';

export class NotificationSpaceBuilder {
  static make(entity?: Partial<NotificationSpace>, entityDto: EntityDto = {}) {
    return new NotificationSpaceEntity(entity, entityDto);
  }
}
