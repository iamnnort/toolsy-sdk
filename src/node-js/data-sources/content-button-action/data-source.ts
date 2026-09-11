import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { ContentButtonAction } from '@src/entities/content-button-action/type';
import {
  ContentButtonActionCreateDto,
  ContentButtonActionSearchDto,
  ContentButtonActionSyncDto,
  ContentButtonActionUpdateDto,
} from './dto';

export class ContentButtonActionDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  ContentButtonAction,
  { params: ContentButtonActionSearchDto },
  PaginationResponse<ContentButtonAction>,
  { data: ContentButtonActionCreateDto },
  { data: ContentButtonActionUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.contentButtonAction.default,
    });
  }

  syncTags(id: string, dto: { data: ContentButtonActionSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.contentButtonAction.tag],
    });
  }
}
