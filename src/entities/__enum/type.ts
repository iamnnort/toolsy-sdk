import { StringOptions } from '../__string/type';

export type EnumOptions = StringOptions & {
  labels?: Record<string, string>;
};
