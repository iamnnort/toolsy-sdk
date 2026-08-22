import { EntityDto } from '@src/types';
import { ClientEntity } from './entity';
import { Client } from './type';

export class ClientBuilder {
  static make(entity?: Partial<Client>, entityDto: EntityDto = {}) {
    return new ClientEntity(entity, entityDto);
  }
}
