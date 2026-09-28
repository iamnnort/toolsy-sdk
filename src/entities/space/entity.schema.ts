import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { chatSchema } from '../chat/entity.schema';

export const spaceSchema = entitySchema.extend({
  link: z.string().catch(''),
  publicLink: z.string().catch(''),
  isMandatorySubscription: z.boolean().catch(false),
  chat: chatSchema.catch(() => chatSchema.parse({})),
});
