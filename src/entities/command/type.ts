import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Command = Entity & {
  title: string;
  trigger: string;
  project: Project;
};
