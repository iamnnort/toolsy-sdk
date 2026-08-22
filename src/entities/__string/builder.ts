import { String } from './entity';
import { StringOptions } from './type';

export class StringBuilder {
  static make(value: string | null, options: StringOptions = {}) {
    return new String(value, options);
  }
}
