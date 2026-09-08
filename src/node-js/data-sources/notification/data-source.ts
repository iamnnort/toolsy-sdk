import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Notification } from '@src/entities/notification/type';
import { NotificationCreateDto, NotificationSearchDto, NotificationUpdateDto } from './dto';

export class NotificationDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Notification,
  { params: NotificationSearchDto },
  PaginationResponse<Notification>,
  { data: NotificationCreateDto },
  { data: NotificationUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.notification.default,
    });
  }
}
