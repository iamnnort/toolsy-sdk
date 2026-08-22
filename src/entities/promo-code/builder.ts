import { EntityDto } from '@src/types';
import { PromoCodeEntity } from './entity';
import { PromoCode } from './type';

export class PromoCodeBuilder {
  static make(entity?: Partial<PromoCode>, entityDto: EntityDto = {}) {
    return new PromoCodeEntity(entity, entityDto);
  }
}
