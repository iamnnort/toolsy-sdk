import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Payment } from '@src/entities/payment/type';
import { PaymentSearchDto } from './dto';

export class PaymentDataSource extends pickRequestDataSource<
  'search' | 'get',
  Payment,
  { params: PaymentSearchDto },
  PaginationResponse<Payment>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.payment.default,
    });
  }
}
