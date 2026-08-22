import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Visit } from '@src/entities/visit/type';
import { VisitSearchDto, VisitUpdateDto } from './dto';

export class VisitDataSource extends pickRequestDataSource<
  'search' | 'get' | 'update',
  Visit,
  { params: VisitSearchDto },
  PaginationResponse<Visit>,
  never,
  { data: VisitUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.visit.default,
    });
  }
}
