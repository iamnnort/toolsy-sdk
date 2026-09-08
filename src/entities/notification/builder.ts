import { EntityDto } from '@src/types';
import { NotificationEntity } from './entity';
import { Notification } from './type';

export class NotificationBuilder {
  static make(entity?: Partial<Notification>, entityDto: EntityDto = {}) {
    return new NotificationEntity(entity, entityDto);
  }
}
