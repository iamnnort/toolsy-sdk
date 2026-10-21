import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Folder = Entity & {
  type: FolderTypes;
  name: string;
  priority: number;
  project: Project;
};

export enum FolderTypes {
  FUNNEL = 'funnel',
  PRODUCT = 'product',
}
