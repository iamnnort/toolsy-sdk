import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Link, LinkMetrics } from '@src/entities/link/type';
import { LinkCreateDto, LinkSearchDto, LinkUpdateDto } from './dto';

export class LinkDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  Link,
  { params: LinkSearchDto },
  PaginationResponse<Link>,
  { data: LinkCreateDto },
  { data: LinkUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.link.default,
    });
  }

  getMetrics(id: string) {
    return this.common<LinkMetrics>({
      method: HttpMethods.GET,
      urlParts: [id, cfg.api.endpoints.link.metric],
    });
  }
}
