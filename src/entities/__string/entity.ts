import isNil from 'lodash/isNil.js';
import { stringSchema } from './entity.schema';
import { StringOptions } from './type';

export class String<Options extends StringOptions = StringOptions> {
  protected rawValue: string | null;
  protected value: string;

  protected options: Options;

  constructor(value: string | null, options: Options = {} as Options) {
    this.rawValue = value;
    this.value = stringSchema.parse(value);

    this.options = options;
  }

  hasValue() {
    return !isNil(this.rawValue) && this.value !== '';
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

    return this.value;
  }

  toString() {
    return this.value;
  }
}
