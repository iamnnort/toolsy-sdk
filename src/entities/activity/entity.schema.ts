import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { ActivityTypes } from './type';

export const activitySchema = entitySchema.extend({
  type: z.enum(ActivityTypes).catch('' as ActivityTypes),
  status: z.string().catch(''),
  prevStatus: z.string().catch(''),
});
