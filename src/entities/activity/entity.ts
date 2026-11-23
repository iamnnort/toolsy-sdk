import { EntityEntity } from '../__entity/entity';
import { EntityDto } from '../type';
import { DateBuilder } from '../__date';
import { EnumBuilder } from '../__enum';
import { StringBuilder } from '../__string';
import { VisitBuilder } from '../visit/builder';
import { ClientBuilder } from '../client/builder';
import { InvoiceBuilder } from '../invoice/builder';
import { PaymentBuilder } from '../payment/builder';
import { RefundBuilder } from '../refund/builder';
import { activitySchema } from './entity.schema';
import { Activity } from './type';

export class ActivityEntity extends EntityEntity<Activity> {
  constructor(entity?: Partial<Activity>, entityDto: EntityDto = {}) {
    super(activitySchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getStatus() {
    return StringBuilder.make(this.entity.status);
  }

  getPrevStatus() {
    return StringBuilder.make(this.entity.prevStatus);
  }

  getValue() {
    return StringBuilder.make(this.entity.value);
  }

  getPrevValue() {
    return StringBuilder.make(this.entity.prevValue);
  }

  getValueDate() {
    return DateBuilder.make(this.entity.value, this.dto);
  }

  getPrevValueDate() {
    return DateBuilder.make(this.entity.prevValue, this.dto);
  }

  getVisit() {
    return VisitBuilder.make(this.entity.visit, this.dto);
  }

  getClient() {
    return ClientBuilder.make(this.entity.client, this.dto);
  }

  getInvoice() {
    return InvoiceBuilder.make(this.entity.invoice, this.dto);
  }

  getPayment() {
    return PaymentBuilder.make(this.entity.payment, this.dto);
  }

  getRefund() {
    return RefundBuilder.make(this.entity.refund, this.dto);
  }
}
