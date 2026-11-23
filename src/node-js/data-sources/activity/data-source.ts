import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Activity } from '@src/entities/activity/type';
import { ActivitySearchDto } from './dto';

export class ActivityDataSource extends pickRequestDataSource<
  'search',
  Activity,
  { params: ActivitySearchDto },
  PaginationResponse<Activity>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.activity.default,
    });
  }
}
