import { BotProviders } from '@src/types';
import { z } from 'zod';

export const botProviderSchema = z.enum(BotProviders).catch('' as BotProviders);
