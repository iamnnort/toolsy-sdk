import { EntityEntity } from '../__entity/entity';
import { BillingPlan } from './type';
import { EntityDto } from '../type';
import { billingPlanSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';

export class BillingPlanEntity extends EntityEntity<BillingPlan> {
  constructor(entity?: Partial<BillingPlan>, entityDto: EntityDto = {}) {
    super(billingPlanSchema, entity, entityDto);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getBillingPlanCycleAt() {
    return DateBuilder.make(this.entity.billingPlanCycleAt, this.dto);
  }
}
