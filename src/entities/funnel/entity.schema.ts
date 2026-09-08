import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { FunnelLifecycles } from './type';

export const funnelSchema = entitySchema.extend({
  name: z.string().catch(''),
  lifecycle: z.enum(FunnelLifecycles).catch('' as FunnelLifecycles),
  isDefault: z.boolean().catch(false),
  isRestartable: z.boolean().catch(false),
  isProtectedContent: z.boolean().catch(false),
});
