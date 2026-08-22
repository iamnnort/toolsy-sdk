import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Product = Entity & {
  name: string;
  access: ProductAccesses;
  isRestartEnabled: boolean;
  isProtectedContent: boolean;
  project: Project;
};

export enum ProductAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}
