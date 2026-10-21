import { HttpMethods, PaginationDto, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Donate } from '@src/entities/donate/type';
import { PaymentSystem } from '@src/entities/payment-system/type';
import { DonateSearchDto, DonateSyncDto } from './dto';

export class DonateDataSource extends pickRequestDataSource<
  'search' | 'get' | 'common',
  Donate,
  { params: DonateSearchDto },
  PaginationResponse<Donate>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.donate.default,
    });
  }

  searchPaymentSystems(id: string, dto: { params?: PaginationDto } = {}) {
    return this.common<PaginationResponse<PaymentSystem>>({
      ...dto,
      method: HttpMethods.GET,
      urlParts: [id, cfg.api.endpoints.donate.paymentSystem],
    });
  }

  syncPaymentSystems(id: string, dto: { data: DonateSyncDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.donate.paymentSystem],
    });
  }
}
