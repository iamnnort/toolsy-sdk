import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Asset } from '@src/entities/asset/type';
import { AssetCreateDto, AssetSearchDto, AssetUpdateDto } from './dto';

export class AssetDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Asset,
  { params: AssetSearchDto },
  PaginationResponse<Asset>,
  { data: AssetCreateDto },
  { data: AssetUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.asset.default,
    });
  }
}
