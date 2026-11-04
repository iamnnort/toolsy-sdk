import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Dialog } from '@src/entities/dialog/type';
import { DialogCreateDto, DialogSearchDto, DialogUpdateDto } from './dto';

export class DialogDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  Dialog,
  { params: DialogSearchDto },
  PaginationResponse<Dialog>,
  { data: DialogCreateDto },
  { data: DialogUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.dialog.default,
    });
  }

  read(id: string) {
    return this.common<Dialog>({
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.dialog.read],
    });
  }
}
