import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Tag } from '@src/entities/tag/type';
import { TagCreateDto, TagSearchDto, TagUpdateDto } from './dto';

export class TagDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Tag,
  { params: TagSearchDto },
  PaginationResponse<Tag>,
  { data: TagCreateDto },
  { data: TagUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.tag.default,
    });
  }
}
