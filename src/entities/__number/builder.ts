import { Number } from './entity';
import { NumberOptions } from './type';

export class NumberBuilder {
  static make(value: number | null, options: NumberOptions = {}) {
    return new Number(value, options);
  }
}
