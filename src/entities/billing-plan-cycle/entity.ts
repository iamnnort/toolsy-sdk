import { EntityEntity } from '../__entity/entity';
import { BillingPlanCycle } from './type';
import { EntityDto } from '../type';
import { billingPlanCycleSchema } from './entity.schema';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';

export class BillingPlanCycleEntity extends EntityEntity<BillingPlanCycle> {
  constructor(entity?: Partial<BillingPlanCycle>, entityDto: EntityDto = {}) {
    super(billingPlanCycleSchema, entity, entityDto);
  }

  getPrice() {
    return NumberBuilder.make(this.entity.price);
  }

  getTotalPrice() {
    return NumberBuilder.make(this.entity.totalPrice);
  }

  getConvertedTotalPrice() {
    return NumberBuilder.make(this.entity.convertedTotalPrice);
  }

  getExchangeRate() {
    return NumberBuilder.make(this.entity.exchangeRate);
  }

  getInterval() {
    return EnumBuilder.make(this.entity.interval);
  }

  getIntervalCount() {
    return NumberBuilder.make(this.entity.intervalCount);
  }

  getMaxQuantity() {
    return NumberBuilder.make(this.entity.maxQuantity);
  }

  isMaxQuantityInfinite() {
    return this.entity.maxQuantityIsInfinite;
  }

  getUsedQuantity() {
    return NumberBuilder.make(this.entity.usedQuantity);
  }

  getDiscountPercentage() {
    return NumberBuilder.make(this.entity.discountPercentage);
  }

  getDiscountAmount() {
    return NumberBuilder.make(this.entity.discountAmount);
  }

  getConvertedDiscountAmount() {
    return NumberBuilder.make(this.entity.convertedDiscountAmount);
  }

  getDiscountExchangeRate() {
    return NumberBuilder.make(this.entity.discountExchangeRate);
  }

  getCurrencyId() {
    return this.entity.currency?.id;
  }

  getConvertedCurrencyId() {
    return this.entity.convertedCurrency?.id;
  }

  getPromoCodeId() {
    return this.entity.promoCode?.id;
  }

  getDiscountCurrencyId() {
    return this.entity.discountCurrency?.id;
  }
}
