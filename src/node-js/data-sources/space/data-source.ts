import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Space } from '@src/entities/space/type';
import { SpaceSearchDto } from './dto';

export class SpaceDataSource extends pickRequestDataSource<
  'search' | 'get',
  Space,
  { params: SpaceSearchDto },
  PaginationResponse<Space>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.space.default,
    });
  }
}
