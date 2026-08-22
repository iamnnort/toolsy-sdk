import { TsyDate } from './entity';
import { EntityDto } from '../type';

export class DateBuilder {
  static make(entity: Date | string | null, entityDto: EntityDto = {}) {
    return new TsyDate(entity, entityDto);
  }
}
