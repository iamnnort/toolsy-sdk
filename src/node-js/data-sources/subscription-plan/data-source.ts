import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { SubscriptionPlan } from '@src/entities/subscription-plan/type';
import { SubscriptionPlanCreateDto, SubscriptionPlanSearchDto, SubscriptionPlanUpdateDto } from './dto';

export class SubscriptionPlanDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  SubscriptionPlan,
  { params: SubscriptionPlanSearchDto },
  PaginationResponse<SubscriptionPlan>,
  { data: SubscriptionPlanCreateDto },
  { data: SubscriptionPlanUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.subscriptionPlan.default,
    });
  }
}
