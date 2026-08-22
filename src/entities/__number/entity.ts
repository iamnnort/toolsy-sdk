import isNil from 'lodash/isNil.js';
import { numberSchema } from './entity.schema';
import { NumberOptions } from './type';

export class Number<Options extends NumberOptions = NumberOptions> {
  protected rawValue: number | null;
  protected value: number;

  protected options: Options;

  constructor(value: number | null, options: Options = {} as Options) {
    this.rawValue = value;
    this.value = numberSchema.parse(value);

    this.options = options;
  }

  hasValue() {
    return !isNil(this.rawValue);
  }

  getRawValue() {
    return this.rawValue;
  }

  getValue() {
    return this.value;
  }

  getLabel() {
    if (!this.hasValue()) {
      return this.options.missingLabel ?? '';
    }

    return `${this.value}`;
  }

  toString() {
    return `${this.value}`;
  }
}
