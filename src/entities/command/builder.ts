import { EntityDto } from '@src/types';
import { CommandEntity } from './entity';
import { Command } from './type';

export class CommandBuilder {
  static make(entity?: Partial<Command>, entityDto: EntityDto = {}) {
    return new CommandEntity(entity, entityDto);
  }
}
