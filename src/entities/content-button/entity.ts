import { EntityEntity } from '../__entity/entity';
import { ContentButton } from './type';
import { EntityDto } from '../type';
import { contentButtonSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';
import { ProductBuilder } from '../product';
import { SubscriptionPlanBuilder } from '../subscription-plan';

export class ContentButtonEntity extends EntityEntity<ContentButton> {
  constructor(entity?: Partial<ContentButton>, entityDto: EntityDto = {}) {
    super(contentButtonSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getStyle() {
    return EnumBuilder.make(this.entity.style);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getTitle() {
    return StringBuilder.make(this.entity.title);
  }

  getUrl() {
    return StringBuilder.make(this.entity.url);
  }

  getRedirectUrl() {
    return StringBuilder.make(this.entity.redirectUrl);
  }

  isProtectedLink() {
    return this.entity.isProtectedLink;
  }

  isDirectLink() {
    return this.entity.isDirectLink;
  }

  getProduct() {
    return ProductBuilder.make(this.entity.product);
  }

  getSubscriptionPlan() {
    return SubscriptionPlanBuilder.make(this.entity.subscriptionPlan);
  }
}
