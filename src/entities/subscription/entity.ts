import { EntityEntity } from '../__entity/entity';
import { Subscription } from './type';
import { EntityDto } from '../type';
import { subscriptionSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';

export class SubscriptionEntity extends EntityEntity<Subscription> {
  constructor(entity?: Partial<Subscription>, entityDto: EntityDto = {}) {
    super(subscriptionSchema, entity, entityDto);
  }

  isInfinite() {
    return this.entity.isInfinite;
  }

  getStartedAt() {
    return DateBuilder.make(this.entity.startedAt, this.dto);
  }

  getExpiredAt() {
    return DateBuilder.make(this.entity.expiredAt, this.dto);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }
}
