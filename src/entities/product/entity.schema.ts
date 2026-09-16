import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { ProductAccesses } from './type';

export const productSchema = entitySchema.extend({
  name: z.string().catch(''),
  access: z.enum(ProductAccesses).catch('' as ProductAccesses),
  isRestartEnabled: z.boolean().catch(false),
  isProtectedContent: z.boolean().catch(false),
  isLessonVisible: z.boolean().catch(false),
  isLessonNameVisible: z.boolean().catch(false),
  priority: z.number().catch(0),
});
