import { EntityEntity } from '../__entity/entity';
import { Invoice } from './type';
import { EntityDto } from '../type';
import { invoiceSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { DateBuilder } from '../__date';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency/builder';
import { DonateBuilder } from '../donate/builder';
import { PaymentSystemBuilder } from '../payment-system/builder';
import { PromoCodeBuilder } from '../promo-code/builder';
import { SubscriptionPlanBuilder } from '../subscription-plan/builder';
import { VisitBuilder } from '../visit/builder';
import { LinkBuilder } from '../link/builder';
import { ContentButtonActionBuilder } from '../content-button-action/builder';

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

  getExpiresAt() {
    return DateBuilder.make(this.entity.expiresAt, this.dto);
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

  getConvertedCurrency() {
    return CurrencyBuilder.make(this.entity.convertedCurrency, this.dto);
  }

  getDiscount() {
    return PriceBuilder.make(this.entity.discountAmount, {
      currencyCode: this.getDiscountCurrency().getCode().getValue(),
      currencyExp: this.getDiscountCurrency().getExp().getValue(),
    });
  }

  getDiscountCurrency() {
    return CurrencyBuilder.make(this.entity.discountCurrency, this.dto);
  }

  getPromoCode() {
    return PromoCodeBuilder.make(this.entity.promoCode, this.dto);
  }

  getSubscriptionPlan() {
    return SubscriptionPlanBuilder.make(this.entity.subscriptionPlan, this.dto);
  }

  getDonate() {
    return DonateBuilder.make(this.entity.donate, this.dto);
  }

  getCurrency() {
    return CurrencyBuilder.make(this.entity.currency, this.dto);
  }

  getPaymentSystem() {
    return PaymentSystemBuilder.make(this.entity.paymentSystem, this.dto);
  }

  getVisit() {
    return VisitBuilder.make(this.entity.visit, this.dto);
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

  getLink() {
    return LinkBuilder.make(this.entity.link, this.dto);
  }

  getContentButtonAction() {
    return ContentButtonActionBuilder.make(this.entity.contentButtonAction, this.dto);
  }
}
