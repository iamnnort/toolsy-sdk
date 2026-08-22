import { Entity } from '@src/entities/type';
import { PrioritySortOrders, SortOrders } from './common';

export type SearchField<T> = T | T[] | null;

export type UpdateField<T> = T | null;

export type SortDto = Record<string, SortOrders>;

export type PrioritySortDto = Record<string, Record<number | string, PrioritySortOrders | number>>;

export type SearchDto<T extends Entity = Entity, Y extends keyof T = 'id', N extends keyof T = 'id'> = {
  id?: SearchField<Entity['id']>;
  page?: UpdateField<number>;
  pageSize?: UpdateField<number>;
  sort?: SortDto;
  prioritySort?: PrioritySortDto;
  not?: {
    id?: SearchField<Entity['id']>;
  } & {
    [P in N]?: SearchField<T[P]>;
  };
} & {
  [P in Y]?: SearchField<T[P]>;
};

export type CreateDto<T extends Entity, R extends keyof T, O extends keyof T> = {
  id?: UpdateField<number>;
} & {
  [P in R]: T[P];
} & {
  [P in O]?: T[P];
};

export type UpdateDto<T extends Entity, K extends keyof T = 'id'> = {
  id?: UpdateField<number>;
} & {
  [P in K]?: UpdateField<T[P]>;
};

export type SyncDto = {
  attach?: boolean;
  attachIds?: string[];
  detach?: boolean;
  detachIds?: string[];
};
