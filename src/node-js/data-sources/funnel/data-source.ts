import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Funnel } from '@src/entities/funnel/type';
import { FunnelCreateDto, FunnelSearchDto, FunnelUpdateDto } from './dto';

export class FunnelDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  Funnel,
  { params: FunnelSearchDto },
  PaginationResponse<Funnel>,
  { data: FunnelCreateDto },
  { data: FunnelUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.funnel.default,
    });
  }

  copy(id: string) {
    return this.common<Funnel>({
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.funnel.copy],
    });
  }
}
