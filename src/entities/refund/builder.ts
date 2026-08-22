import { EntityDto } from '@src/types';
import { RefundEntity } from './entity';
import { Refund } from './type';

export class RefundBuilder {
  static make(entity?: Partial<Refund>, entityDto: EntityDto = {}) {
    return new RefundEntity(entity, entityDto);
  }
}
