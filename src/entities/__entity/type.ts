import type { Locale } from 'date-fns';
import { Timezones } from '@src/types';

export type Entity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type EntityDto = {
  timezone?: Timezones;
  locale?: Locale;
};
