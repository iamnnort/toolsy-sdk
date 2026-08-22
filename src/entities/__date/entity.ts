import { format } from 'date-fns';
import { dateSchema } from './entity.schema';
import isNil from 'lodash/isNil.js';
import { toZonedTime } from 'date-fns-tz';
import { DateOptions, EntityDto } from '../type';
import { Timezones } from '@src/types';

export class TsyDate {
  rawValue?: Date | string | null;

  value: Date;

  private options: DateOptions;

  private dto: Required<EntityDto>;

  constructor(date: Date | string | null, options: DateOptions = {}) {
    this.rawValue = date;
    this.value = dateSchema.parse(date);

    this.options = options;

    this.dto = {
      timezone: options.timezone || Timezones.UTC,
    };
  }

  hasValue() {
    return !isNil(this.rawValue) && this.rawValue !== '';
  }

  getRawValue() {
    return this.rawValue;
  }

  getValue() {
    return this.value;
  }

  hasInfinite() {
    return !isNil(this.options.isInfinite);
  }

  isInfinite() {
    return this.hasInfinite() && (this.options.isInfinite as boolean);
  }

  isFinite() {
    return !this.isInfinite();
  }

  getLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    return format(toZonedTime(this.value, this.dto.timezone), 'dd MMMM yyyy');
  }

  getShortLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    return format(toZonedTime(this.value, this.dto.timezone), 'dd MMMM');
  }

  getDateTimeLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    const dateTime = format(toZonedTime(this.value, this.dto.timezone), 'd MMMM yyyy, HH:mm');

    if (this.dto.timezone === Timezones.UTC) {
      return `${dateTime} UTC`;
    }

    return dateTime;
  }

  toString() {
    return this.getLabel();
  }
}
