import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { PromoCode } from '@src/entities/promo-code/type';
import { PromoCodeCreateDto, PromoCodeSearchDto } from './dto';

export class PromoCodeDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create',
  PromoCode,
  { params: PromoCodeSearchDto },
  PaginationResponse<PromoCode>,
  { data: PromoCodeCreateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.promoCode.default,
    });
  }
}
