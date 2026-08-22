import { EntityDto } from '@src/types';
import { BillingPlanEntity } from './entity';
import { BillingPlan } from './type';

export class BillingPlanBuilder {
  static make(entity?: Partial<BillingPlan>, entityDto: EntityDto = {}) {
    return new BillingPlanEntity(entity, entityDto);
  }
}
