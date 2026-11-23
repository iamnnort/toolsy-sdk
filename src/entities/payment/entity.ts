import { EntityEntity } from '../__entity/entity';
import { Payment } from './type';
import { EntityDto } from '../type';
import { paymentSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { PriceBuilder } from '../__price';
import { CurrencyBuilder } from '../currency/builder';

export class PaymentEntity extends EntityEntity<Payment> {
  constructor(entity?: Partial<Payment>, entityDto: EntityDto = {}) {
    super(paymentSchema, entity, entityDto);
  }

  getProviderToken() {
    return StringBuilder.make(this.entity.providerToken);
  }

  getFundingSource() {
    return EnumBuilder.make(this.entity.fundingSource);
  }

  getAmountNet() {
    return NumberBuilder.make(this.entity.amountNet);
  }

  getAmountGross() {
    return NumberBuilder.make(this.entity.amountGross);
  }

  getAmountFee() {
    return NumberBuilder.make(this.entity.amountFee);
  }

  getExchangeRate() {
    return NumberBuilder.make(this.entity.exchangeRate);
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

  getGrossAmount() {
    return PriceBuilder.make(this.entity.amountGross, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  getFeeAmount() {
    return PriceBuilder.make(this.entity.amountFee, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }

  getNetAmount() {
    return PriceBuilder.make(this.entity.amountNet, {
      currencyCode: this.getCurrency().getCode().getValue(),
      currencyExp: this.getCurrency().getExp().getValue(),
    });
  }
}
