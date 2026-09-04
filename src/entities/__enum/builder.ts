import { Enum } from './entity';
import { EnumOptions } from './type';

export class EnumBuilder {
  static make<Value extends string = string>(value: Value | null, options: EnumOptions<Value> = {}) {
    return new Enum<Value>(value, options);
  }
}
