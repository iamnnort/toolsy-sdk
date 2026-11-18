import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { DialogNotification } from '@src/entities/dialog-notification/type';
import { DialogNotificationCreateDto, DialogNotificationPreviewDto, DialogNotificationSearchDto } from './dto';

export class DialogNotificationDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'remove' | 'common',
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

  preview(id: string, dto: { data: DialogNotificationPreviewDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.dialogNotification.preview],
    });
  }
}
