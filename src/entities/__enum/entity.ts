import { String } from '../__string';
import { EnumOptions } from './type';

export class Enum<Value extends string = string> extends String<EnumOptions<Value>> {
  getRawValue() {
    return super.getRawValue() as Value | null;
  }

  getValue() {
    return super.getValue() as Value;
  }

  getLabel() {
    if (this.options.labels) {
      return this.options.labels[this.getValue()] ?? super.getLabel();
    }

    return super.getLabel();
  }

  has(values: Value[]) {
    return values.includes(this.getValue());
  }
}
