import { EntityEntity } from '../__entity/entity';
import { Invoice } from './type';
import { EntityDto } from '../type';
import { invoiceSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';

export class InvoiceEntity extends EntityEntity<Invoice> {
  constructor(entity?: Partial<Invoice>, entityDto: EntityDto = {}) {
    super(invoiceSchema, entity, entityDto);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
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

  getComment() {
    return StringBuilder.make(this.entity.comment);
  }

  getCheckoutUrl() {
    return StringBuilder.make(this.entity.checkoutUrl);
  }

  getSource() {
    return EnumBuilder.make(this.entity.source);
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }

  getDonateId() {
    return this.entity.donate?.id;
  }

  getCurrencyId() {
    return this.entity.currency?.id;
  }

  getConvertedCurrencyId() {
    return this.entity.convertedCurrency?.id;
  }

  getDiscountCurrencyId() {
    return this.entity.discountCurrency?.id;
  }

  getPaymentSystemId() {
    return this.entity.paymentSystem?.id;
  }

  getPromoCodeId() {
    return this.entity.promoCode?.id;
  }

  getVisitId() {
    return this.entity.visit?.id;
  }

  getLatestPaymentId() {
    return this.entity.latestPayment?.id;
  }

  getLatestRefundId() {
    return this.entity.latestRefund?.id;
  }
}
