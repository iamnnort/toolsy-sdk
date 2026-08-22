import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Client } from '@src/entities/client/type';
import { ClientSearchDto, ClientUpdateDto } from './dto';

export class ClientDataSource extends pickRequestDataSource<
  'search' | 'get' | 'update',
  Client,
  { params: ClientSearchDto },
  PaginationResponse<Client>,
  never,
  { data: ClientUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.client.default,
    });
  }
}
