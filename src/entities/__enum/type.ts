import { StringOptions } from '../__string/type';

export type EnumOptions<Value extends string = string> = StringOptions & {
  labels?: Partial<Record<Value, string>>;
};
