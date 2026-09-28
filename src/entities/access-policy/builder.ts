import { EntityDto } from '@src/types';
import { AccessPolicyEntity } from './entity';
import { AccessPolicy } from './type';

export class AccessPolicyBuilder {
  static make(entity?: Partial<AccessPolicy>, entityDto: EntityDto = {}) {
    return new AccessPolicyEntity(entity, entityDto);
  }
}
