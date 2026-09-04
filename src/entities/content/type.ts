import { Entity } from '../__entity/type';

export type Content = Entity & {
  title: string;
  text: string;
};
