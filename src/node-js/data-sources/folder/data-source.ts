import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Folder } from '@src/entities/folder/type';
import { FolderCreateDto, FolderSearchDto, FolderUpdateDto } from './dto';

export class FolderDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Folder,
  { params: FolderSearchDto },
  PaginationResponse<Folder>,
  { data: FolderCreateDto },
  { data: FolderUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.folder.default,
    });
  }
}
