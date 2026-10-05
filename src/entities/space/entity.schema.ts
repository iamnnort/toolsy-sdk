import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { chatSchema } from '../chat/entity.schema';
import { SpaceLifecycles } from './type';

export const spaceSchema = entitySchema.extend({
  lifecycle: z.enum(SpaceLifecycles).catch('' as SpaceLifecycles),
  priority: z.number().catch(0),
  url: z.string().catch(''),
  joinUrl: z.string().catch(''),
  isFollowRequired: z.boolean().catch(false),
  chat: chatSchema.catch(() => chatSchema.parse({})),
});
