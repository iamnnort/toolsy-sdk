import { EntityEntity } from '../__entity/entity';
import { Command } from './type';
import { EntityDto } from '../type';
import { commandSchema } from './entity.schema';
import { StringBuilder } from '../__string';

export class CommandEntity extends EntityEntity<Command> {
  constructor(entity?: Partial<Command>, entityDto: EntityDto = {}) {
    super(commandSchema, entity, entityDto);
  }

  getTitle() {
    return StringBuilder.make(this.entity.title);
  }

  getTrigger() {
    return StringBuilder.make(this.entity.trigger);
  }

  getProjectId() {
    return this.entity.project?.id;
  }
}
