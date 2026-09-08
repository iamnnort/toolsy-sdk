import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { ContentButtonStyles, ContentButtonTypes } from './type';

export const contentButtonSchema = entitySchema.extend({
  type: z.enum(ContentButtonTypes).catch('' as ContentButtonTypes),
  style: z.enum(ContentButtonStyles).catch('' as ContentButtonStyles),
  priority: z.number().catch(0),
  title: z.string().catch(''),
  url: z.string().catch(''),
  redirectUrl: z.string().catch(''),
  isProtectedLink: z.boolean().catch(false),
  isDirectLink: z.boolean().catch(false),
});
