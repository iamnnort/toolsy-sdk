import { EntityDto } from '@src/types';
import { SubscriptionPlanCycleEntity } from './entity';
import { SubscriptionPlanCycle } from './type';

export class SubscriptionPlanCycleBuilder {
  static make(entity?: Partial<SubscriptionPlanCycle>, entityDto: EntityDto = {}) {
    return new SubscriptionPlanCycleEntity(entity, entityDto);
  }
}
