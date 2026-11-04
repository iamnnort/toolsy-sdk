import { EntityDto } from '@src/types';
import { DialogNotificationEntity } from './entity';
import { DialogNotification } from './type';

export class DialogNotificationBuilder {
  static make(entity?: Partial<DialogNotification>, entityDto: EntityDto = {}) {
    return new DialogNotificationEntity(entity, entityDto);
  }
}
