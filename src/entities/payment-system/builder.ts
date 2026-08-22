import { EntityDto } from '@src/types';
import { PaymentSystemEntity } from './entity';
import { PaymentSystem } from './type';

export class PaymentSystemBuilder {
  static make(entity?: Partial<PaymentSystem>, entityDto: EntityDto = {}) {
    return new PaymentSystemEntity(entity, entityDto);
  }
}
