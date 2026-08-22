import { EntityEntity } from '../__entity/entity';
import { Refund } from './type';
import { EntityDto } from '../type';
import { refundSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';

export class RefundEntity extends EntityEntity<Refund> {
  constructor(entity?: Partial<Refund>, entityDto: EntityDto = {}) {
    super(refundSchema, entity, entityDto);
  }

  getProviderToken() {
    return StringBuilder.make(this.entity.providerToken);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getAmount() {
    return NumberBuilder.make(this.entity.amount);
  }

  getComment() {
    return StringBuilder.make(this.entity.comment);
  }
}
