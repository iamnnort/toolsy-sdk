import { EntityEntity } from '../__entity/entity';
import { SubscriptionPlanCycle } from './type';
import { EntityDto } from '../type';
import { subscriptionPlanCycleSchema } from './entity.schema';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency';

export class SubscriptionPlanCycleEntity extends EntityEntity<SubscriptionPlanCycle> {
  constructor(entity?: Partial<SubscriptionPlanCycle>, entityDto: EntityDto = {}) {
    super(subscriptionPlanCycleSchema, entity, entityDto);
  }

  getPrice() {
    return PriceBuilder.make(this.entity.price, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  getInterval() {
    return EnumBuilder.make(this.entity.interval);
  }

  getIntervalCount() {
    return NumberBuilder.make(this.entity.intervalCount);
  }

  getChargeLimit() {
    return NumberBuilder.make(this.entity.chargeLimit);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getCurrency() {
    return CurrencyBuilder.make(this.entity.currency);
  }

  getCurrencyId() {
    return this.entity.currency?.id;
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }
}
