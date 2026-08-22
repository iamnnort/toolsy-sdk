import { EntityDto } from '@src/types';
import { DonateEntity } from './entity';
import { Donate } from './type';

export class DonateBuilder {
  static make(entity?: Partial<Donate>, entityDto: EntityDto = {}) {
    return new DonateEntity(entity, entityDto);
  }
}
