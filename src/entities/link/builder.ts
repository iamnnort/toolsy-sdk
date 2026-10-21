import { EntityDto } from '@src/types';
import { LinkEntity } from './entity';
import { Link } from './type';

export class LinkBuilder {
  static make(entity?: Partial<Link>, entityDto: EntityDto = {}) {
    return new LinkEntity(entity, entityDto);
  }
}
