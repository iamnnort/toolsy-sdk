import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Product, ProductMetrics } from '@src/entities/product/type';
import { ProductCreateDto, ProductSearchDto, ProductUpdateDto } from './dto';

export class ProductDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
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

  getMetrics(id: string) {
    return this.common<ProductMetrics>({
      method: HttpMethods.GET,
      urlParts: [id, cfg.api.endpoints.product.metric],
    });
  }

  copy(id: string) {
    return this.common<Product>({
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.product.copy],
    });
  }
}
