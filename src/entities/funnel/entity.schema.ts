import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { FunnelLifecycles } from './type';

export const funnelSchema = entitySchema.extend({
  name: z.string().catch(''),
  lifecycle: z.enum(FunnelLifecycles).catch('' as FunnelLifecycles),
  isDefault: z.boolean().catch(false),
  isRestartable: z.boolean().catch(false),
  hasContentProtection: z.boolean().catch(false),
  priority: z.number().catch(0),
});
