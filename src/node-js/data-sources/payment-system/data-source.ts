import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { PaymentSystem } from '@src/entities/payment-system/type';
import { PaymentSystemCreateDto, PaymentSystemSearchDto, PaymentSystemSyncDto, PaymentSystemUpdateDto } from './dto';

export class PaymentSystemDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  PaymentSystem,
  { params: PaymentSystemSearchDto },
  PaginationResponse<PaymentSystem>,
  { data: PaymentSystemCreateDto },
  { data: PaymentSystemUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.paymentSystem.default,
    });
  }

  syncSubscriptionPlans(id: string, dto: { data: PaymentSystemSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.paymentSystem.subscriptionPlan],
    });
  }

  syncDonates(id: string, dto: { data: PaymentSystemSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.paymentSystem.donate],
    });
  }
}
