import { BotProviders } from '@src/types';
import { botProviderSchema } from './entity.schema';
import { BotProviderGetBotLinkOptions, BotProviderGetNameOptions, BotProviderOptions } from './type';

const baseLinkMap: Record<BotProviders, { baseLink: string; userLink: string }> = {
  [BotProviders.TELEGRAM]: {
    baseLink: 'https://t.me',
    userLink: 'tg://user?id=',
  },
  [BotProviders.MAX]: {
    baseLink: 'https://max.ru',
    userLink: 'max://user/',
  },
};

export class BotProvider {
  private value: BotProviders;
  private options: BotProviderOptions;

  constructor(value?: BotProviders, options: BotProviderOptions = {}) {
    this.value = botProviderSchema.parse(value);
    this.options = options;
  }

  hasEntity() {
    return !!this.options.id;
  }

  getValue() {
    return this.value;
  }

  getId() {
    return this.options.id || '';
  }

  getUsername() {
    return this.options.username || '';
  }

  hasUsername() {
    return !!this.options.username;
  }

  getName(options: BotProviderGetNameOptions = {}) {
    if (this.options.name) {
      return this.options.name;
    }

    if (this.hasUsername()) {
      return this.getInlineLink();
    }

    if (options.link) {
      return this.getUserLink();
    }

    return this.getFullName();
  }

  getFirstName() {
    return this.options.firstName || '';
  }

  getLastName() {
    return this.options.lastName || '';
  }

  getFullName() {
    return [this.getFirstName(), this.getLastName()].filter((_) => _).join(' ');
  }

  getInlineLink() {
    return `@${this.getUsername()}`;
  }

  getUserLink() {
    const userLink = baseLinkMap[this.value].userLink;

    return `[a]${this.getFullName()}=${userLink}${this.getId()}[a]`;
  }

  getBotLink(options: BotProviderGetBotLinkOptions = {}) {
    const baseLink = baseLinkMap[this.value].baseLink;

    if (options.deepLink) {
      return `${baseLink}/${this.getUsername()}?start=${options.deepLink}`;
    }

    return `${baseLink}/${this.getUsername()}`;
  }

  getOrgName() {
    const labelsMap = {
      [BotProviders.TELEGRAM]: 'Telegram',
      [BotProviders.MAX]: 'MAX',
    };

    return labelsMap[this.value];
  }
}
