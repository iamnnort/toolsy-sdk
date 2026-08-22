import { EntityEntity } from '../__entity/entity';
import { PromoCode } from './type';
import { EntityDto } from '../type';
import { promoCodeSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';

export class PromoCodeEntity extends EntityEntity<PromoCode> {
  constructor(entity?: Partial<PromoCode>, entityDto: EntityDto = {}) {
    super(promoCodeSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getAccess() {
    return EnumBuilder.make(this.entity.access);
  }

  getVisibility() {
    return EnumBuilder.make(this.entity.visibility);
  }

  getDiscountPercent() {
    return NumberBuilder.make(this.entity.discountPercent);
  }

  getDiscountAmount() {
    return NumberBuilder.make(this.entity.discountAmount);
  }

  getMaxQuantity() {
    return NumberBuilder.make(this.entity.maxQuantity);
  }

  getMaxQuantityIsInfinite() {
    return this.entity.maxQuantityIsInfinite;
  }

  getMaxRecurringQuantity() {
    return NumberBuilder.make(this.entity.maxRecurringQuantity);
  }

  getMaxRecurringQuantityIsInfinite() {
    return this.entity.maxRecurringQuantityIsInfinite;
  }

  getMaxUsedQuantity() {
    return NumberBuilder.make(this.entity.maxUsedQuantity);
  }

  getMaxUsedQuantityIsInfinite() {
    return this.entity.maxUsedQuantityIsInfinite;
  }

  getExpiredAt() {
    return DateBuilder.make(this.entity.expiredAt, this.dto);
  }

  isInfinite() {
    return this.entity.isInfinite;
  }

  getUsedQuantity() {
    return NumberBuilder.make(this.entity.usedQuantity);
  }

  getPaidQuantity() {
    return NumberBuilder.make(this.entity.paidQuantity);
  }
}
