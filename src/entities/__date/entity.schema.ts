import { z } from 'zod';

export const dateSchema = z
  .union([z.date(), z.string()])
  .nullable()
  .transform((value) => (value ? new Date(value) : new Date()))
  .catch(new Date());
