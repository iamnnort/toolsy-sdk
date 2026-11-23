import { EntityEntity } from '../__entity/entity';
import { BillingPlan, BillingPlanSystemStatuses } from './type';
import { EntityDto } from '../type';
import { billingPlanSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';
import { NumberBuilder } from '../__number';
import { BillingPlanCycleBuilder } from '../billing-plan-cycle/builder';
import { PaymentSystemBuilder } from '../payment-system/builder';
import { SubscriptionPlanBuilder } from '../subscription-plan/builder';
import { VisitBuilder } from '../visit/builder';

export class BillingPlanEntity extends EntityEntity<BillingPlan> {
  constructor(entity?: Partial<BillingPlan>, entityDto: EntityDto = {}) {
    super(billingPlanSchema, entity, entityDto);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getSystemStatus() {
    return EnumBuilder.make(this.entity.systemStatus as BillingPlanSystemStatuses);
  }

  getRetryCount() {
    return NumberBuilder.make(this.entity.retryCount);
  }

  isProviderScheduled() {
    return this.entity.isProviderScheduled;
  }

  getNextChargeAt() {
    return DateBuilder.make(this.entity.nextChargeAt, this.dto);
  }

  getSubscriptionPlan() {
    return SubscriptionPlanBuilder.make(this.entity.subscriptionPlan, this.dto);
  }

  getPaymentSystem() {
    return PaymentSystemBuilder.make(this.entity.paymentSystem, this.dto);
  }

  getVisit() {
    return VisitBuilder.make(this.entity.visit, this.dto);
  }

  getBillingPlanCycle() {
    return BillingPlanCycleBuilder.make(this.entity.billingPlanCycle, this.dto);
  }

  getSubscriptionPlanId() {
    return this.entity.subscriptionPlan?.id;
  }

  getPaymentSystemId() {
    return this.entity.paymentSystem?.id;
  }

  getVisitId() {
    return this.entity.visit?.id;
  }

  getBillingPlanCycleId() {
    return this.entity.billingPlanCycle?.id;
  }
}
