import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { SubscriptionPlanCycle } from '@src/entities/subscription-plan-cycle/type';
import { SubscriptionPlanCycleCreateDto, SubscriptionPlanCycleSearchDto, SubscriptionPlanCycleUpdateDto } from './dto';

export class SubscriptionPlanCycleDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  SubscriptionPlanCycle,
  { params: SubscriptionPlanCycleSearchDto },
  PaginationResponse<SubscriptionPlanCycle>,
  { data: SubscriptionPlanCycleCreateDto },
  { data: SubscriptionPlanCycleUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.subscriptionPlanCycle.default,
    });
  }
}
