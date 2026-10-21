import { EntityEntity } from '../__entity/entity';
import { Link } from './type';
import { EntityDto } from '../type';
import { linkSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';
import { ProductBuilder } from '../product';
import { SubscriptionPlanBuilder } from '../subscription-plan';
import { FunnelBuilder } from '../funnel';
import { PromoCodeBuilder } from '../promo-code';

export class LinkEntity extends EntityEntity<Link> {
  constructor(entity?: Partial<Link>, entityDto: EntityDto = {}) {
    super(linkSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getTgToken() {
    return StringBuilder.make(this.entity.tgToken);
  }

  getMaxToken() {
    return StringBuilder.make(this.entity.maxToken);
  }

  getWebToken() {
    return StringBuilder.make(this.entity.webToken);
  }

  getUsageLimit() {
    return NumberBuilder.make(this.entity.usageLimit);
  }

  getExpiresAt() {
    return DateBuilder.make(this.entity.expiresAt, this.dto);
  }

  getProductId() {
    return this.entity.product?.id;
  }

  getProduct() {
    return ProductBuilder.make(this.entity.product ?? undefined);
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }

  getSubscriptionPlan() {
    return SubscriptionPlanBuilder.make(this.entity.subscriptionPlan ?? undefined);
  }

  getFunnelId() {
    return this.entity.funnel?.id;
  }

  getFunnel() {
    return FunnelBuilder.make(this.entity.funnel ?? undefined);
  }

  getPromoCodeId() {
    return this.entity.promoCode?.id;
  }

  getPromoCode() {
    return PromoCodeBuilder.make(this.entity.promoCode ?? undefined);
  }
}
