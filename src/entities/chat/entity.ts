import { EntityEntity } from '../__entity/entity';
import { Chat } from './type';
import { EntityDto } from '../type';
import { chatSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';

export class ChatEntity extends EntityEntity<Chat> {
  constructor(entity?: Partial<Chat>, entityDto: EntityDto = {}) {
    super(chatSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getProvider() {
    return EnumBuilder.make(this.entity.provider);
  }

  getProviderId() {
    return StringBuilder.make(this.entity.providerId);
  }

  getProviderName() {
    return StringBuilder.make(this.entity.providerName);
  }

  getProjectId() {
    return this.entity.project?.id;
  }
}
