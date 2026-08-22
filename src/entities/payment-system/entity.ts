import { EntityEntity } from '../__entity/entity';
import { PaymentSystem } from './type';
import { EntityDto } from '../type';
import { paymentSystemSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';

export class PaymentSystemEntity extends EntityEntity<PaymentSystem> {
  constructor(entity?: Partial<PaymentSystem>, entityDto: EntityDto = {}) {
    super(paymentSystemSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getProvider() {
    return EnumBuilder.make(this.entity.provider);
  }

  getTaxation() {
    return EnumBuilder.make(this.entity.taxation);
  }

  getVat() {
    return EnumBuilder.make(this.entity.vat);
  }
}
