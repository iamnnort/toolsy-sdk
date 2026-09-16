import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { Intervals, Weekdays } from '../../types/common';
import { NotificationEvents, NotificationIntervalOrigins, NotificationLifecycles, NotificationTypes } from './type';

export const notificationSchema = entitySchema.extend({
  type: z.enum(NotificationTypes).catch('' as NotificationTypes),
  name: z.string().catch(''),
  lifecycle: z.enum(NotificationLifecycles).catch('' as NotificationLifecycles),
  event: z.enum(NotificationEvents).catch('' as NotificationEvents),
  intervalOrigin: z.enum(NotificationIntervalOrigins).catch('' as NotificationIntervalOrigins),
  interval: z.enum(Intervals).catch('' as Intervals),
  intervalCount: z.number().catch(0),
  editInterval: z.enum(Intervals).catch('' as Intervals),
  editIntervalCount: z.number().catch(0),
  isScheduledSkipIfOverdue: z.boolean().catch(false),
  scheduledAt: z.string().catch(''),
  sendWindowTimeFrom: z.string().catch(''),
  sendWindowTimeTo: z.string().catch(''),
  sendWindowWeekdays: z.array(z.enum(Weekdays)).catch([]),
  priority: z.number().catch(0),
  isProtectedContent: z.boolean().catch(false),
  isLinkPreviewEnabled: z.boolean().catch(false),
});
