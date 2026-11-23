import { HttpMethods, PaginationDto, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { BillingPlan } from '@src/entities/billing-plan/type';
import { BillingPlanCycle } from '@src/entities/billing-plan-cycle/type';
import { BillingPlanRescheduleDto, BillingPlanSearchDto } from './dto';

export class BillingPlanDataSource extends pickRequestDataSource<
  'search' | 'get' | 'remove' | 'common',
  BillingPlan,
  { params: BillingPlanSearchDto },
  PaginationResponse<BillingPlan>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.billingPlan.default,
    });
  }

  cycles = {
    search: (id: string, dto: { params?: PaginationDto } = {}) => {
      return this.common<PaginationResponse<BillingPlanCycle>>({
        ...dto,
        method: HttpMethods.GET,
        urlParts: [id, cfg.api.endpoints.billingPlan.cycle],
      });
    },
  };

  cancel(id: string) {
    return this.common<BillingPlan>({
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.billingPlan.cancel],
    });
  }

  reschedule(id: string, dto: { data: BillingPlanRescheduleDto }) {
    return this.common<BillingPlan>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.billingPlan.reschedule],
    });
  }
}
