import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { LinkTypes } from './type';

export const linkSchema = entitySchema.extend({
  type: z.enum(LinkTypes).catch('' as LinkTypes),
  name: z.string().catch(''),
  priority: z.number().catch(0),
  tgToken: z.string().catch(''),
  maxToken: z.string().catch(''),
  webToken: z.string().catch(''),
  usageLimit: z.number().nullable().catch(null),
  expiresAt: z.string().nullable().catch(null),
});
