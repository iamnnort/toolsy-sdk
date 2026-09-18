import { EntityEntity } from '../__entity/entity';
import { PromoCode } from './type';
import { EntityDto } from '../type';
import { promoCodeSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';
import { CurrencyBuilder } from '../currency';

export class PromoCodeEntity extends EntityEntity<PromoCode> {
  constructor(entity?: Partial<PromoCode>, entityDto: EntityDto = {}) {
    super(promoCodeSchema, entity, entityDto);
  }

  getCode() {
    return StringBuilder.make(this.entity.code);
  }

  getAccess() {
    return EnumBuilder.make(this.entity.access);
  }

  getVisibility() {
    return EnumBuilder.make(this.entity.visibility);
  }

  getDiscountPercentage() {
    return NumberBuilder.make(this.entity.discountPercentage);
  }

  getDiscountAmount() {
    return NumberBuilder.make(this.entity.discountAmount);
  }

  getUsageLimit() {
    return NumberBuilder.make(this.entity.usageLimit);
  }

  getRecurringUsageLimit() {
    return NumberBuilder.make(this.entity.recurringUsageLimit);
  }

  getPerUserUsageLimit() {
    return NumberBuilder.make(this.entity.perUserUsageLimit);
  }

  getExpiresAt() {
    return DateBuilder.make(this.entity.expiresAt, this.dto);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getDiscountCurrency() {
    return CurrencyBuilder.make(this.entity.discountCurrency);
  }

  getDiscountCurrencyId() {
    return this.entity.discountCurrency?.id;
  }

  getProjectId() {
    return this.entity.project?.id;
  }
}
