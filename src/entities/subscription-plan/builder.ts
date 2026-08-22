import { EntityDto } from '@src/types';
import { SubscriptionPlanEntity } from './entity';
import { SubscriptionPlan } from './type';

export class SubscriptionPlanBuilder {
  static make(entity?: Partial<SubscriptionPlan>, entityDto: EntityDto = {}) {
    return new SubscriptionPlanEntity(entity, entityDto);
  }
}
