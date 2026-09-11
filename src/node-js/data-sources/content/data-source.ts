import { pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Content } from '@src/entities/content/type';
import { ContentUpdateDto } from './dto';

export class ContentDataSource extends pickRequestDataSource<
  'update',
  Content,
  never,
  never,
  never,
  { data: ContentUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.content.default,
    });
  }
}
