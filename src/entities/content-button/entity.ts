import { EntityEntity } from '../__entity/entity';
import { ContentButton } from './type';
import { EntityDto } from '../type';
import { contentButtonSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';
import { Visit } from '../visit/type';
import { Client } from '../client/type';

export type ContentButtonEntities = {
  visit: Visit;
  client: Client;
};

export class ContentButtonEntity extends EntityEntity<ContentButton, ContentButtonEntities> {
  constructor(
    entity?: Partial<ContentButton>,
    entityDto: EntityDto = {},
    entities: Partial<ContentButtonEntities> = {},
  ) {
    super(contentButtonSchema, entity, entityDto, entities as ContentButtonEntities);
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
    if (this.isDirectLink()) {
      return this.getUrl();
    }

    const { visit, client } = this.entities;

    if (visit?.id) {
      return StringBuilder.make(`${this.entity.redirectUrl}?visitId=${visit.id}`);
    }

    if (client?.id) {
      return StringBuilder.make(`${this.entity.redirectUrl}?clientId=${client.id}`);
    }

    return StringBuilder.make(this.entity.redirectUrl);
  }

  getJoinUrl() {
    const { visit, client } = this.entities;

    if (visit?.id) {
      return StringBuilder.make(`${this.entity.joinUrl}?visitId=${visit.id}`);
    }

    if (client?.id) {
      return StringBuilder.make(`${this.entity.joinUrl}?clientId=${client.id}`);
    }

    return StringBuilder.make(this.entity.joinUrl);
  }

  isProtectedLink() {
    return this.entity.isProtectedLink;
  }

  isDirectLink() {
    return this.entity.isDirectLink;
  }

  getProductId() {
    return this.entity.product?.id;
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }

  getSpaceId() {
    return this.entity.space?.id;
  }
}
