import { EntityEntity } from '../__entity/entity';
import { Space } from './type';
import { EntityDto } from '../type';
import { spaceSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { ChatBuilder } from '../chat';

export class SpaceEntity extends EntityEntity<Space> {
  constructor(entity?: Partial<Space>, entityDto: EntityDto = {}) {
    super(spaceSchema, entity, entityDto);
  }

  getLink() {
    return StringBuilder.make(this.entity.link);
  }

  getPublicLink() {
    return StringBuilder.make(this.entity.publicLink);
  }

  isMandatorySubscription() {
    return this.entity.isMandatorySubscription;
  }

  getChat() {
    return ChatBuilder.make(this.entity.chat, this.dto);
  }

  getChatId() {
    return this.entity.chat?.id;
  }
}
