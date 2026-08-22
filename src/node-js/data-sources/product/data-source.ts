import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Product } from '@src/entities/product/type';
import { ProductCreateDto, ProductSearchDto, ProductUpdateDto } from './dto';

export class ProductDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Product,
  { params: ProductSearchDto },
  PaginationResponse<Product>,
  { data: ProductCreateDto },
  { data: ProductUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.product.default,
    });
  }
}
