import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { MarketingProgram } from '@src/entities/marketing-program/type';
import { MarketingProgramSearchDto } from './dto';

export class MarketingProgramDataSource extends pickRequestDataSource<
  'search' | 'get',
  MarketingProgram,
  { params: MarketingProgramSearchDto },
  PaginationResponse<MarketingProgram>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.marketingProgram.default,
    });
  }
}
