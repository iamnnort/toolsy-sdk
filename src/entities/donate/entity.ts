import { EntityEntity } from '../__entity/entity';
import { Donate } from './type';
import { EntityDto } from '../type';
import { donateSchema } from './entity.schema';

export class DonateEntity extends EntityEntity<Donate> {
  constructor(entity?: Partial<Donate>, entityDto: EntityDto = {}) {
    super(donateSchema, entity, entityDto);
  }
}
