import { EntityEntity } from '../__entity/entity';
import { Refund } from './type';
import { EntityDto } from '../type';
import { refundSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency/builder';

export class RefundEntity extends EntityEntity<Refund> {
  constructor(entity?: Partial<Refund>, entityDto: EntityDto = {}) {
    super(refundSchema, entity, entityDto);
  }

  getProviderToken() {
    return StringBuilder.make(this.entity.providerToken);
  }

  getAmount() {
    return NumberBuilder.make(this.entity.amount);
  }

  getComment() {
    return StringBuilder.make(this.entity.comment);
  }

  getCurrencyId() {
    return this.entity.currency?.id;
  }

  getInvoiceId() {
    return this.entity.invoice?.id;
  }

  getCurrency() {
    return CurrencyBuilder.make(this.entity.currency, this.dto);
  }

  getTotalAmount() {
    return PriceBuilder.make(this.entity.amount, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }
}
