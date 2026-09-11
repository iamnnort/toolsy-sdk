import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { ContentButtonActionTypes } from './type';

export const contentButtonActionSchema = entitySchema.extend({
  type: z.enum(ContentButtonActionTypes).catch('' as ContentButtonActionTypes),
  priority: z.number().catch(0),
});
