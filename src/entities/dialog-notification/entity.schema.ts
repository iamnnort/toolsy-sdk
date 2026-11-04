import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { DialogNotificationEvents, DialogNotificationSendErrors, DialogNotificationStatuses } from './type';

export const dialogNotificationSchema = entitySchema.extend({
  event: z.enum(DialogNotificationEvents).nullable().catch(null),
  status: z.enum(DialogNotificationStatuses).catch('' as DialogNotificationStatuses),
  sendError: z.enum(DialogNotificationSendErrors).nullable().catch(null),
  providerId: z.string().nullable().catch(null),
  editedAt: z.string().nullable().catch(null),
});
