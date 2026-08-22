import { Enum } from './entity';
import { EnumOptions } from './type';

export class EnumBuilder {
  static make(value: string | null, options: EnumOptions = {}) {
    return new Enum(value, options);
  }
}
