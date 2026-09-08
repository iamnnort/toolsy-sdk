import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { ContentButton } from '@src/entities/content-button/type';
import { ContentButtonCreateDto, ContentButtonSearchDto, ContentButtonSyncDto, ContentButtonUpdateDto } from './dto';

export class ContentButtonDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  ContentButton,
  { params: ContentButtonSearchDto },
  PaginationResponse<ContentButton>,
  { data: ContentButtonCreateDto },
  { data: ContentButtonUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.contentButton.default,
    });
  }

  syncTags(id: string, dto: { data: ContentButtonSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.contentButton.tag],
    });
  }
}
