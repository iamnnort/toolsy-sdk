import { BotProviders } from '@src/types';
import { BotProvider } from './entity';
import { BotProviderOptions } from './type';

export class BotProviderBuilder {
  static make(value?: BotProviders, options: BotProviderOptions = {}) {
    return new BotProvider(value, options);
  }
}
