import { EntityEntity } from '../__entity/entity';
import { Funnel } from './type';
import { EntityDto } from '../type';
import { funnelSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';

export class FunnelEntity extends EntityEntity<Funnel> {
  constructor(entity?: Partial<Funnel>, entityDto: EntityDto = {}) {
    super(funnelSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getLifecycle() {
    return EnumBuilder.make(this.entity.lifecycle);
  }

  isDefault() {
    return this.entity.isDefault;
  }

  isRestartable() {
    return this.entity.isRestartable;
  }

  isProtectedContent() {
    return this.entity.isProtectedContent;
  }

  getProjectId() {
    return this.entity.project?.id;
  }
}
