import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Field = Entity & {
  name: string;
  type: FieldTypes;
  project: Project;
};

export enum FieldTypes {
  NUMBER = 'number',
  TEXT = 'text',
}
