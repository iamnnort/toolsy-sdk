import { EntityDto } from '@src/types';
import { DialogEntity } from './entity';
import { Dialog } from './type';

export class DialogBuilder {
  static make(entity?: Partial<Dialog>, entityDto: EntityDto = {}) {
    return new DialogEntity(entity, entityDto);
  }
}
