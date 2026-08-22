import { EntityDto } from '@src/types';
import { SubscriptionEntity } from './entity';
import { Subscription } from './type';

export class SubscriptionBuilder {
  static make(entity?: Partial<Subscription>, entityDto: EntityDto = {}) {
    return new SubscriptionEntity(entity, entityDto);
  }
}
