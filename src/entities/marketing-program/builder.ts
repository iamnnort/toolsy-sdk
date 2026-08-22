import { EntityDto } from '@src/types';
import { MarketingProgramEntity } from './entity';
import { MarketingProgram } from './type';

export class MarketingProgramBuilder {
  static make(entity?: Partial<MarketingProgram>, entityDto: EntityDto = {}) {
    return new MarketingProgramEntity(entity, entityDto);
  }
}
