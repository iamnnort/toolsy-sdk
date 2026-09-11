import { EntityEntity } from '../__entity/entity';
import { ContentButtonAction } from './type';
import { EntityDto } from '../type';
import { contentButtonActionSchema } from './entity.schema';
import { ContentBuilder } from '../content';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';

export class ContentButtonActionEntity extends EntityEntity<ContentButtonAction> {
  constructor(entity?: Partial<ContentButtonAction>, entityDto: EntityDto = {}) {
    super(contentButtonActionSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getContent() {
    return ContentBuilder.make(this.entity.content);
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getContentButtonId() {
    return this.entity.contentButton?.id;
  }

  getNotificationId() {
    return this.entity.notification?.id;
  }

  getCommandId() {
    return this.entity.command?.id;
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }

  getProductId() {
    return this.entity.product?.id;
  }

  getFunnelId() {
    return this.entity.funnel?.id;
  }
}
