import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { BillingPlan } from '@src/entities/billing-plan/type';
import { BillingPlanSearchDto } from './dto';

export class BillingPlanDataSource extends pickRequestDataSource<
  'search' | 'get',
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
}
