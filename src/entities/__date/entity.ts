import { differenceInCalendarDays, format } from 'date-fns';
import { dateSchema } from './entity.schema';
import isNil from 'lodash/isNil.js';
import { toZonedTime } from 'date-fns-tz';
import { DateOptions, EntityDto } from '../type';
import { Timezones } from '@src/types';

export class TsyDate {
  rawValue?: Date | string | null;

  value: Date;

  private options: DateOptions;

  private dto: EntityDto & { timezone: Timezones };

  constructor(date: Date | string | null, options: DateOptions = {}) {
    this.rawValue = date;
    this.value = dateSchema.parse(date);

    this.options = options;

    this.dto = {
      timezone: options.timezone || Timezones.UTC,
      locale: options.locale,
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

    return format(toZonedTime(this.value, this.dto.timezone), 'dd MMMM yyyy', { locale: this.dto.locale });
  }

  getShortLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    return format(toZonedTime(this.value, this.dto.timezone), 'dd MMMM', { locale: this.dto.locale });
  }

  getTimeLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    return format(toZonedTime(this.value, this.dto.timezone), 'HH:mm');
  }

  getDayLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    const zonedValue = toZonedTime(this.value, this.dto.timezone);
    const zonedNow = toZonedTime(new Date(), this.dto.timezone);

    const days = differenceInCalendarDays(zonedNow, zonedValue);

    if (days === 0 || days === 1) {
      const localeCode = this.dto.locale?.code ?? 'en-US';

      const label = new Intl.RelativeTimeFormat(localeCode, { numeric: 'auto' }).format(-days, 'day');

      return label.charAt(0).toLocaleUpperCase(localeCode) + label.slice(1);
    }

    const pattern = zonedValue.getFullYear() === zonedNow.getFullYear() ? 'd MMMM' : 'd MMMM yyyy';

    return format(zonedValue, pattern, { locale: this.dto.locale });
  }

  getRelativeLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    const zonedValue = toZonedTime(this.value, this.dto.timezone);
    const zonedNow = toZonedTime(new Date(), this.dto.timezone);

    const days = differenceInCalendarDays(zonedNow, zonedValue);

    if (days === 0) {
      return format(zonedValue, 'HH:mm');
    }

    if (days < 7) {
      return format(zonedValue, 'EEEEEE', { locale: this.dto.locale });
    }

    return format(zonedValue, 'dd.MM.yy');
  }

  getDateTimeLabel() {
    if (this.isInfinite()) {
      return this.options.infiniteLabel ?? '';
    }

    const dateTime = format(toZonedTime(this.value, this.dto.timezone), 'd MMMM yyyy, HH:mm', {
      locale: this.dto.locale,
    });

    if (this.dto.timezone === Timezones.UTC) {
      return `${dateTime} UTC`;
    }

    return dateTime;
  }

  toString() {
    return this.getLabel();
  }
}
