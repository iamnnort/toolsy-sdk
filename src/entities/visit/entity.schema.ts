import { z } from 'zod';
import { BotProviders } from '../../types/common';
import { entitySchema, localeEntitySchema } from '../__entity/entity.schema';
import { VisitJoinStatuses, VisitStatuses } from './type';

export const visitSchema = entitySchema.extend({
  ...localeEntitySchema.shape,
  provider: z.enum(BotProviders).catch('' as BotProviders),
  status: z.enum(VisitStatuses).catch('' as VisitStatuses),
  joinStatus: z.enum(VisitJoinStatuses).catch('' as VisitJoinStatuses),
  email: z.string().nullable().catch(null),
});
