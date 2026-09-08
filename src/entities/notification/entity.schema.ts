import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { NotificationEvents, NotificationLifecycles, NotificationTypes } from './type';

export const notificationSchema = entitySchema.extend({
  type: z.enum(NotificationTypes).catch('' as NotificationTypes),
  name: z.string().catch(''),
  lifecycle: z.enum(NotificationLifecycles).catch('' as NotificationLifecycles),
  event: z.enum(NotificationEvents).catch('' as NotificationEvents),
  offset: z.number().catch(0),
  isProtectedContent: z.boolean().catch(false),
  isLinkPreviewEnabled: z.boolean().catch(false),
});
