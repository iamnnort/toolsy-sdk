import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { Intervals, Weekdays } from '../../types/common';
import { AutomationActions, AutomationEvents, AutomationLifecycles } from './type';

export const automationSchema = entitySchema.extend({
  event: z.enum(AutomationEvents).catch('' as AutomationEvents),
  action: z.enum(AutomationActions).catch('' as AutomationActions),
  lifecycle: z.enum(AutomationLifecycles).catch('' as AutomationLifecycles),
  interval: z.enum(Intervals).catch('' as Intervals),
  intervalCount: z.number().catch(0),
  sendWindowTimeFrom: z.string().catch(''),
  sendWindowTimeTo: z.string().catch(''),
  sendWindowWeekdays: z.array(z.enum(Weekdays)).catch([]),
  priority: z.number().catch(0),
});
