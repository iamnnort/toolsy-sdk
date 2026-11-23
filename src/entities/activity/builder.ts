import { EntityDto } from '@src/types';
import { ActivityEntity } from './entity';
import { Activity } from './type';

export class ActivityBuilder {
  static make(entity?: Partial<Activity>, entityDto: EntityDto = {}) {
    return new ActivityEntity(entity, entityDto);
  }
}
