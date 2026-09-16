import { EntityEntity } from '../__entity/entity';
import { Automation } from './type';
import { EntityDto } from '../type';
import { automationSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { NotificationBuilder } from '../notification';

export class AutomationEntity extends EntityEntity<Automation> {
  constructor(entity?: Partial<Automation>, entityDto: EntityDto = {}) {
    super(automationSchema, entity, entityDto);
  }

  getEvent() {
    return EnumBuilder.make(this.entity.event);
  }

  getAction() {
    return EnumBuilder.make(this.entity.action);
  }

  getLifecycle() {
    return EnumBuilder.make(this.entity.lifecycle);
  }

  getInterval() {
    return EnumBuilder.make(this.entity.interval);
  }

  getIntervalCount() {
    return NumberBuilder.make(this.entity.intervalCount);
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

  getProductId() {
    return this.entity.product?.id;
  }

  getActionNotificationId() {
    return this.entity.actionNotification?.id;
  }

  getActionNotification() {
    return NotificationBuilder.make(this.entity.actionNotification, this.dto);
  }
}
