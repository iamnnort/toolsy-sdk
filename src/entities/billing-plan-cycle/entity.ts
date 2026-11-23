import { EntityEntity } from '../__entity/entity';
import { BillingPlanCycle } from './type';
import { EntityDto } from '../type';
import { billingPlanCycleSchema } from './entity.schema';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency/builder';
import { PromoCodeBuilder } from '../promo-code/builder';

export class BillingPlanCycleEntity extends EntityEntity<BillingPlanCycle> {
  constructor(entity?: Partial<BillingPlanCycle>, entityDto: EntityDto = {}) {
    super(billingPlanCycleSchema, entity, entityDto);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getPriceAmount() {
    return PriceBuilder.make(this.entity.price, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  getTotalAmount() {
    return PriceBuilder.make(this.entity.totalPrice, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  getConvertedTotalAmount() {
    return PriceBuilder.make(this.entity.convertedTotalPrice, {
      currencyCode: this.getConvertedCurrency().getCode().getValue(),
      currencyExp: this.getConvertedCurrency().getExp().getValue(),
    });
  }

  getDiscount() {
    return PriceBuilder.make(this.entity.discountAmount, {
      currencyCode: this.getDiscountCurrency().getCode().getValue(),
      currencyExp: this.getDiscountCurrency().getExp().getValue(),
    });
  }

  getCurrency() {
    return CurrencyBuilder.make(this.entity.currency, this.dto);
  }

  getConvertedCurrency() {
    return CurrencyBuilder.make(this.entity.convertedCurrency, this.dto);
  }

  getDiscountCurrency() {
    return CurrencyBuilder.make(this.entity.discountCurrency, this.dto);
  }

  getPromoCode() {
    return PromoCodeBuilder.make(this.entity.promoCode, this.dto);
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

  getChargeLimit() {
    return NumberBuilder.make(this.entity.chargeLimit);
  }

  getChargeCount() {
    return NumberBuilder.make(this.entity.chargeCount);
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
