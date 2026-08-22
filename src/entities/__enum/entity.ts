import { String } from '../__string';
import { EnumOptions } from './type';

export class Enum extends String<EnumOptions> {
  getLabel() {
    if (this.options.labels) {
      return this.options.labels[this.value] ?? super.getLabel();
    }

    return super.getLabel();
  }

  has(values: string[]) {
    return values.includes(this.value);
  }
}
