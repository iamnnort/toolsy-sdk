import { EntityDto } from '@src/types';
import { AutomationEntity } from './entity';
import { Automation } from './type';

export class AutomationBuilder {
  static make(entity?: Partial<Automation>, entityDto: EntityDto = {}) {
    return new AutomationEntity(entity, entityDto);
  }
}
