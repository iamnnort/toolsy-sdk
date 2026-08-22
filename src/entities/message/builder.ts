import { EntityDto } from '@src/types';
import { MessageEntity } from './entity';
import { Message } from './type';

export class MessageBuilder {
  static make(entity?: Partial<Message>, entityDto: EntityDto = {}) {
    return new MessageEntity(entity, entityDto);
  }
}
