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

  getDiscountPercent() {
    return NumberBuilder.make(this.entity.discountPercent);
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
}
