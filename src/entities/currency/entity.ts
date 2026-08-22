import { EntityEntity } from '../__entity/entity';
import { Currency } from './type';
import { EntityDto } from '../type';
import { currencySchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';

export class CurrencyEntity extends EntityEntity<Currency> {
  constructor(entity?: Partial<Currency>, entityDto: EntityDto = {}) {
    super(currencySchema, entity, entityDto);
  }

  getCode() {
    return StringBuilder.make(this.entity.code);
  }

  getSymbol() {
    return StringBuilder.make(this.entity.symbol);
  }

  getExp() {
    return NumberBuilder.make(this.entity.exp);
  }

  getUsdExchangeRate() {
    return NumberBuilder.make(this.entity.usdExchangeRate);
  }
}
