import { EntityDto } from '@src/types';
import { InvoiceEntity } from './entity';
import { Invoice } from './type';

export class InvoiceBuilder {
  static make(entity?: Partial<Invoice>, entityDto: EntityDto = {}) {
    return new InvoiceEntity(entity, entityDto);
  }
}
