import { EntityEntity } from '../__entity/entity';
import { Field } from './type';
import { EntityDto } from '../type';
import { fieldSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';

export class FieldEntity extends EntityEntity<Field> {
  constructor(entity?: Partial<Field>, entityDto: EntityDto = {}) {
    super(fieldSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getProjectId() {
    return this.entity.project?.id;
  }
}
