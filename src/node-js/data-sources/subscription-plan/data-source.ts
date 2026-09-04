import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { SubscriptionPlan } from '@src/entities/subscription-plan/type';
import {
  SubscriptionPlanCreateDto,
  SubscriptionPlanSearchDto,
  SubscriptionPlanSyncDto,
  SubscriptionPlanUpdateDto,
} from './dto';

export class SubscriptionPlanDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
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

  syncPaymentSystems(id: string, dto: { data: SubscriptionPlanSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.subscriptionPlan.paymentSystem],
    });
  }
}
