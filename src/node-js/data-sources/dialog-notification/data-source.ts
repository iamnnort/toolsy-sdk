import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { DialogNotification } from '@src/entities/dialog-notification/type';
import { DialogNotificationCreateDto, DialogNotificationSearchDto } from './dto';

export class DialogNotificationDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'remove',
  DialogNotification,
  { params: DialogNotificationSearchDto },
  PaginationResponse<DialogNotification>,
  { data: DialogNotificationCreateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.dialogNotification.default,
    });
  }
}
