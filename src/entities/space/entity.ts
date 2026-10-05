import { EntityEntity } from '../__entity/entity';
import { Space } from './type';
import { EntityDto } from '../type';
import { spaceSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { ChatBuilder } from '../chat';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';

export class SpaceEntity extends EntityEntity<Space> {
  constructor(entity?: Partial<Space>, entityDto: EntityDto = {}) {
    super(spaceSchema, entity, entityDto);
  }

  getLifecycle() {
    return EnumBuilder.make(this.entity.lifecycle);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getUrl() {
    return StringBuilder.make(this.entity.url);
  }

  getJoinUrl() {
    return StringBuilder.make(this.entity.joinUrl);
  }

  isFollowRequired() {
    return this.entity.isFollowRequired;
  }

  getChat() {
    return ChatBuilder.make(this.entity.chat, this.dto);
  }

  getChatId() {
    return this.entity.chat?.id;
  }
}
