import { EntityEntity } from '../__entity/entity';
import { Payment } from './type';
import { EntityDto } from '../type';
import { paymentSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';

export class PaymentEntity extends EntityEntity<Payment> {
  constructor(entity?: Partial<Payment>, entityDto: EntityDto = {}) {
    super(paymentSchema, entity, entityDto);
  }

  getProviderToken() {
    return StringBuilder.make(this.entity.providerToken);
  }

  getSource() {
    return EnumBuilder.make(this.entity.source);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
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
}
