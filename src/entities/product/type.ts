import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Project } from '../project/type';

export type Product = Entity & {
  name: string;
  access: ProductAccesses;
  isRestartEnabled: boolean;
  isProtectedContent: boolean;
  isLessonVisible: boolean;
  isLessonNameVisible: boolean;
  priority: number;
  content: Content;
  project: Project;
};

export enum ProductAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}
