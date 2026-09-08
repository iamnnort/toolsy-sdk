import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Tag = Entity & {
  name: string;
  project: Project;
};
