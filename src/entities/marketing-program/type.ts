import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type MarketingProgram = Entity & {
  name: string;
  token: string;
  project: Project;
};
