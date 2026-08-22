import { EntityEntity } from '../__entity/entity';
import { Message } from './type';
import { EntityDto } from '../type';
import { messageSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';

export class MessageEntity extends EntityEntity<Message> {
  constructor(entity?: Partial<Message>, entityDto: EntityDto = {}) {
    super(messageSchema, entity, entityDto);
  }

  getLanguage() {
    return EnumBuilder.make(this.entity.language);
  }

  getTimezone() {
    return EnumBuilder.make(this.entity.timezone);
  }
}
