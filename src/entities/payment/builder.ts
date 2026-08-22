import { EntityDto } from '@src/types';
import { PaymentEntity } from './entity';
import { Payment } from './type';

export class PaymentBuilder {
  static make(entity?: Partial<Payment>, entityDto: EntityDto = {}) {
    return new PaymentEntity(entity, entityDto);
  }
}
