import { EntityDto } from '@src/types';
import { CurrencyEntity } from './entity';
import { Currency } from './type';

export class CurrencyBuilder {
  static make(entity?: Partial<Currency>, entityDto: EntityDto = {}) {
    return new CurrencyEntity(entity, entityDto);
  }
}
