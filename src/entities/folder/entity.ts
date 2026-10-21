import { EntityEntity } from '../__entity/entity';
import { Folder } from './type';
import { EntityDto } from '../type';
import { folderSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NumberBuilder } from '../__number';
import { EnumBuilder } from '../__enum';

export class FolderEntity extends EntityEntity<Folder> {
  constructor(entity?: Partial<Folder>, entityDto: EntityDto = {}) {
    super(folderSchema, entity, entityDto);
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

  getProjectId() {
    return this.entity.project?.id;
  }
}
