import { EntityDto } from '@src/types';
import { VisitEntity } from './entity';
import { Visit } from './type';

export class VisitBuilder {
  static make(entity?: Partial<Visit>, entityDto: EntityDto = {}) {
    return new VisitEntity(entity, entityDto);
  }
}
