import { EntityEntity } from '../__entity/entity';
import { NotificationSpace } from './type';
import { EntityDto } from '../type';
import { notificationSpaceSchema } from './entity.schema';
import { DateBuilder } from '../__date';
import { NotificationBuilder } from '../notification';
import { SpaceBuilder } from '../space';

export class NotificationSpaceEntity extends EntityEntity<NotificationSpace> {
  constructor(entity?: Partial<NotificationSpace>, entityDto: EntityDto = {}) {
    super(notificationSpaceSchema, entity, entityDto);
  }

  getExpiresAt() {
    return DateBuilder.make(this.entity.expiresAt, this.dto);
  }

  getNotification() {
    return NotificationBuilder.make(this.entity.notification, this.dto);
  }

  getNotificationId() {
    return this.entity.notification?.id;
  }

  getSpace() {
    return SpaceBuilder.make(this.entity.space, this.dto);
  }

  getSpaceId() {
    return this.entity.space?.id;
  }
}
