import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Donate } from '@src/entities/donate/type';
import { DonateSearchDto } from './dto';

export class DonateDataSource extends pickRequestDataSource<
  'search' | 'get',
  Donate,
  { params: DonateSearchDto },
  PaginationResponse<Donate>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.donate.default,
    });
  }
}
