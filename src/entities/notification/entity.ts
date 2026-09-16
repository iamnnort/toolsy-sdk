import { EntityEntity } from '../__entity/entity';
import { Notification } from './type';
import { EntityDto } from '../type';
import { notificationSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';
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

  getIntervalOrigin() {
    return EnumBuilder.make(this.entity.intervalOrigin);
  }

  getInterval() {
    return EnumBuilder.make(this.entity.interval);
  }

  getIntervalCount() {
    return NumberBuilder.make(this.entity.intervalCount);
  }

  getEditInterval() {
    return EnumBuilder.make(this.entity.editInterval);
  }

  getEditIntervalCount() {
    return NumberBuilder.make(this.entity.editIntervalCount);
  }

  isScheduledSkipIfOverdue() {
    return this.entity.isScheduledSkipIfOverdue;
  }

  getScheduledAt() {
    return DateBuilder.make(this.entity.scheduledAt, this.dto);
  }

  getSendWindowTimeFrom() {
    return StringBuilder.make(this.entity.sendWindowTimeFrom);
  }

  getSendWindowTimeTo() {
    return StringBuilder.make(this.entity.sendWindowTimeTo);
  }

  getSendWindowWeekdays() {
    return this.entity.sendWindowWeekdays.map((weekday) => EnumBuilder.make(weekday));
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
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
