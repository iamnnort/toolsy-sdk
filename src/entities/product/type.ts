import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Project } from '../project/type';
import { Folder } from '../folder/type';

export type Product = Entity & {
  name: string;
  access: ProductAccesses;
  isRestartable: boolean;
  hasContentProtection: boolean;
  isLessonVisible: boolean;
  isLessonNameVisible: boolean;
  priority: number;
  content: Content;
  project: Project;
  folder: Folder | null;
};

export type ProductMetrics = {
  subscriber: {
    count: number;
  };
};

export enum ProductAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}
