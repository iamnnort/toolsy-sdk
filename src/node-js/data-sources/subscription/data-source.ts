import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Subscription } from '@src/entities/subscription/type';
import { SubscriptionSearchDto } from './dto';

export class SubscriptionDataSource extends pickRequestDataSource<
  'search' | 'get',
  Subscription,
  { params: SubscriptionSearchDto },
  PaginationResponse<Subscription>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.subscription.default,
    });
  }
}
