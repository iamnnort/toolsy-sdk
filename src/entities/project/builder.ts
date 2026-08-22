import { EntityDto } from '@src/types';
import { ProjectEntity } from './entity';
import { Project } from './type';

export class ProjectBuilder {
  static make(entity?: Partial<Project>, entityDto: EntityDto = {}) {
    return new ProjectEntity(entity, entityDto);
  }
}
