import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { DialogLifecycles } from './type';

export const dialogSchema = entitySchema.extend({
  lifecycle: z.enum(DialogLifecycles).catch('' as DialogLifecycles),
  unreadCount: z.number().catch(0),
  hasPin: z.boolean().catch(false),
  hasMute: z.boolean().catch(false),
});
