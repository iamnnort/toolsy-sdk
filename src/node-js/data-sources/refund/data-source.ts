import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Refund } from '@src/entities/refund/type';
import { RefundSearchDto } from './dto';

export class RefundDataSource extends pickRequestDataSource<
  'search' | 'get',
  Refund,
  { params: RefundSearchDto },
  PaginationResponse<Refund>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.refund.default,
    });
  }
}
