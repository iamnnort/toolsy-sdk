import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Currency } from '@src/entities/currency/type';
import { CurrencySearchDto } from './dto';

export class CurrencyDataSource extends pickRequestDataSource<
  'search' | 'get',
  Currency,
  { params: CurrencySearchDto },
  PaginationResponse<Currency>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.currency.default,
    });
  }
}
