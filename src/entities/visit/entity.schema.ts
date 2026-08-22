import { z } from 'zod';
import { entitySchema, localeEntitySchema } from '../__entity/entity.schema';
import { VisitStatuses } from './type';

export const visitSchema = entitySchema.extend({
  ...localeEntitySchema.shape,
  status: z.enum(VisitStatuses).catch('' as VisitStatuses),
  email: z.string().nullable().catch(null),
});
