import { EntityEntity } from '../__entity/entity';
import { AccessPolicy } from './type';
import { EntityDto } from '../type';
import { accessPolicySchema } from './entity.schema';
import { DateBuilder } from '../__date';
import { NotificationBuilder } from '../notification';
import { SpaceBuilder } from '../space';

export class AccessPolicyEntity extends EntityEntity<AccessPolicy> {
  constructor(entity?: Partial<AccessPolicy>, entityDto: EntityDto = {}) {
    super(accessPolicySchema, entity, entityDto);
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
