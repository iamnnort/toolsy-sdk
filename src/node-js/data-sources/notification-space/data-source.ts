import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { NotificationSpace } from '@src/entities/notification-space/type';
import { NotificationSpaceCreateDto, NotificationSpaceSearchDto, NotificationSpaceUpdateDto } from './dto';

export class NotificationSpaceDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  NotificationSpace,
  { params: NotificationSpaceSearchDto },
  PaginationResponse<NotificationSpace>,
  { data: NotificationSpaceCreateDto },
  { data: NotificationSpaceUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.notificationSpace.default,
    });
  }
}
