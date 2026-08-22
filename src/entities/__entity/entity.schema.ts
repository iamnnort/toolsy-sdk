import { z } from 'zod';
import { Languages, Timezones } from '../../types/common';

export const entitySchema = z.looseObject({
  id: z.string().catch(''),
  createdAt: z.string().catch(''),
  updatedAt: z.string().catch(''),
});

export const localeEntitySchema = z.object({
  language: z.enum(Languages).catch('' as Languages),
  timezone: z.enum(Timezones).catch('' as Timezones),
});
