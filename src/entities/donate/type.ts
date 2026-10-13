import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Donate = Entity & {
  project: Project;
};
