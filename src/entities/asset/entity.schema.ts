import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { BotProviders, MediaTypes } from '../../types/common';

export const assetSchema = entitySchema.extend({
  type: z.enum(MediaTypes).catch('' as MediaTypes),
  provider: z.enum(BotProviders).catch('' as BotProviders),
  priority: z.number().catch(0),
  providerId: z.string().catch(''),
  name: z.string().catch(''),
  size: z.number().nullable().catch(null),
  width: z.number().nullable().catch(null),
  height: z.number().nullable().catch(null),
  duration: z.number().nullable().catch(null),
  mimeType: z.string().catch(''),
  url: z.string().catch(''),
  html: z.string().catch(''),
  hasSpoiler: z.boolean().catch(false),
  hasCaption: z.boolean().catch(true),
});
