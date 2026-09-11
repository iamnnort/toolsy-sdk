import { EntityEntity } from '../__entity/entity';
import { Notification } from './type';
import { EntityDto } from '../type';
import { notificationSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { ContentBuilder } from '../content';

export class NotificationEntity extends EntityEntity<Notification> {
  constructor(entity?: Partial<Notification>, entityDto: EntityDto = {}) {
    super(notificationSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getLifecycle() {
    return EnumBuilder.make(this.entity.lifecycle);
  }

  getEvent() {
    return EnumBuilder.make(this.entity.event);
  }

  getOffset() {
    return NumberBuilder.make(this.entity.offset);
  }

  isProtectedContent() {
    return this.entity.isProtectedContent;
  }

  isLinkPreviewEnabled() {
    return this.entity.isLinkPreviewEnabled;
  }

  getProductId() {
    return this.entity.product?.id;
  }

  getFunnelId() {
    return this.entity.funnel?.id;
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getContent() {
    return ContentBuilder.make(this.entity.content);
  }
}
