import { EntityDto } from '@src/types';
import { BillingPlanCycleEntity } from './entity';
import { BillingPlanCycle } from './type';

export class BillingPlanCycleBuilder {
  static make(entity?: Partial<BillingPlanCycle>, entityDto: EntityDto = {}) {
    return new BillingPlanCycleEntity(entity, entityDto);
  }
}
