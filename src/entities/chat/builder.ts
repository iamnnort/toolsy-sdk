import { EntityDto } from '@src/types';
import { ChatEntity } from './entity';
import { Chat } from './type';

export class ChatBuilder {
  static make(entity?: Partial<Chat>, entityDto: EntityDto = {}) {
    return new ChatEntity(entity, entityDto);
  }
}
