import { EntityEntity } from '../__entity/entity';
import { SubscriptionPlan } from './type';
import { EntityDto } from '../type';
import { subscriptionPlanSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency';

export class SubscriptionPlanEntity extends EntityEntity<SubscriptionPlan> {
  constructor(entity?: Partial<SubscriptionPlan>, entityDto: EntityDto = {}) {
    super(subscriptionPlanSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getPrice() {
    return PriceBuilder.make(this.entity.price, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  isInfinite() {
    return this.entity.isInfinite;
  }

  getInterval() {
    return EnumBuilder.make(this.entity.interval);
  }

  getIntervalCount() {
    return NumberBuilder.make(this.entity.intervalCount);
  }

  getAccess() {
    return EnumBuilder.make(this.entity.access);
  }

  getVisibility() {
    return EnumBuilder.make(this.entity.visibility);
  }

  getFixation() {
    return EnumBuilder.make(this.entity.fixation);
  }

  getCurrency() {
    return CurrencyBuilder.make(this.entity.currency);
  }
}
