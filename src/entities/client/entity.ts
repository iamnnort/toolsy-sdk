import { EntityEntity } from '../__entity/entity';
import { Client } from './type';
import { EntityDto } from '../type';
import { clientSchema } from './entity.schema';
import { BotProviders } from '@src/types';
import { StringBuilder } from '../__string';
import { BotProviderBuilder } from '../__bot-provider';

export class ClientEntity extends EntityEntity<Client> {
  constructor(entity?: Partial<Client>, entityDto: EntityDto = {}) {
    super(clientSchema, entity, entityDto);
  }

  getFirstName() {
    return StringBuilder.make(this.entity.firstName);
  }

  getLastName() {
    return StringBuilder.make(this.entity.lastName);
  }

  getFullName() {
    return StringBuilder.make(
      [this.getFirstName().getValue(), this.getLastName().getValue()].filter((_) => _).join(' '),
    );
  }

  getEmail() {
    return StringBuilder.make(this.entity.email);
  }

  getProvider(provider: BotProviders) {
    if (provider === BotProviders.TELEGRAM) {
      return BotProviderBuilder.make(BotProviders.TELEGRAM, {
        id: this.entity.tgId,
        username: this.entity.tgUsername,
        firstName: this.entity.tgFirstName,
        lastName: this.entity.tgLastName,
      });
    }

    if (provider === BotProviders.MAX) {
      return BotProviderBuilder.make(BotProviders.MAX, {
        id: this.entity.maxId,
        username: this.entity.maxUsername,
        firstName: this.entity.maxFirstName,
        lastName: this.entity.maxLastName,
      });
    }

    return BotProviderBuilder.make(provider);
  }
}
