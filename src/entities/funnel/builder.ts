import { EntityDto } from '@src/types';
import { FunnelEntity } from './entity';
import { Funnel } from './type';

export class FunnelBuilder {
  static make(entity?: Partial<Funnel>, entityDto: EntityDto = {}) {
    return new FunnelEntity(entity, entityDto);
  }
}
