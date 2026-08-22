import { EntityEntity } from '../__entity/entity';
import { Visit } from './type';
import { EntityDto } from '../type';
import { visitSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';

export class VisitEntity extends EntityEntity<Visit> {
  constructor(entity?: Partial<Visit>, entityDto: EntityDto = {}) {
    super(visitSchema, entity, entityDto);
  }

  getLanguage() {
    return EnumBuilder.make(this.entity.language);
  }

  getTimezone() {
    return EnumBuilder.make(this.entity.timezone);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getEmail() {
    return StringBuilder.make(this.entity.email);
  }
}
