import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { spaceSchema } from '../space/entity.schema';
import { notificationSchema } from '../notification/entity.schema';

export const notificationSpaceSchema = entitySchema.extend({
  expiresAt: z.string().nullable().catch(null),
  notification: notificationSchema.catch(() => notificationSchema.parse({})),
  space: spaceSchema.catch(() => spaceSchema.parse({})),
});
