import { EntityDto } from '@src/types';
import { FieldEntity } from './entity';
import { Field } from './type';

export class FieldBuilder {
  static make(entity?: Partial<Field>, entityDto: EntityDto = {}) {
    return new FieldEntity(entity, entityDto);
  }
}
