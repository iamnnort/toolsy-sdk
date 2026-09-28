import { EntityDto } from '@src/types';
import { SpaceEntity } from './entity';
import { Space } from './type';

export class SpaceBuilder {
  static make(entity?: Partial<Space>, entityDto: EntityDto = {}) {
    return new SpaceEntity(entity, entityDto);
  }
}
