import { EntityEntity } from '../__entity/entity';
import { Funnel } from './type';
import { EntityDto } from '../type';
import { funnelSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';
import { ContentBuilder } from '../content';

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

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getProjectId() {
    return this.entity.project?.id;
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getContent() {
    return ContentBuilder.make(this.entity.content);
  }

  getTriggerFunnelId() {
    return this.entity.triggerFunnel?.id;
  }

  getTriggerFunnel() {
    return new FunnelEntity(this.entity.triggerFunnel);
  }
}
