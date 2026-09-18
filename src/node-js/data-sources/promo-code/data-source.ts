import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { PromoCode, PromoCodeMetrics } from '@src/entities/promo-code/type';
import { PromoCodeCreateDto, PromoCodeSearchDto, PromoCodeSyncDto, PromoCodeUpdateDto } from './dto';

export class PromoCodeDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  PromoCode,
  { params: PromoCodeSearchDto },
  PaginationResponse<PromoCode>,
  { data: PromoCodeCreateDto },
  { data: PromoCodeUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.promoCode.default,
    });
  }

  getMetrics(id: string) {
    return this.common<PromoCodeMetrics>({
      method: HttpMethods.GET,
      urlParts: [id, cfg.api.endpoints.promoCode.metric],
    });
  }

  syncSubscriptionPlans(id: string, dto: { data: PromoCodeSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.promoCode.subscriptionPlan],
    });
  }
}
