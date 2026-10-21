import { EntityDto } from '@src/types';
import { FolderEntity } from './entity';
import { Folder } from './type';

export class FolderBuilder {
  static make(entity?: Partial<Folder>, entityDto: EntityDto = {}) {
    return new FolderEntity(entity, entityDto);
  }
}
