import { EntityEntity } from '../__entity/entity';
import { MarketingProgram } from './type';
import { EntityDto } from '../type';
import { marketingProgramSchema } from './entity.schema';
import { StringBuilder } from '../__string';

export class MarketingProgramEntity extends EntityEntity<MarketingProgram> {
  constructor(entity?: Partial<MarketingProgram>, entityDto: EntityDto = {}) {
    super(marketingProgramSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getToken() {
    return StringBuilder.make(this.entity.token);
  }
}
