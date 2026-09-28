import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { BotProviders } from '../../types/common';
import { ChatTypes } from './type';

export const chatSchema = entitySchema.extend({
  type: z.enum(ChatTypes).catch('' as ChatTypes),
  provider: z.enum(BotProviders).catch('' as BotProviders),
  providerId: z.string().catch(''),
  providerName: z.string().catch(''),
});
