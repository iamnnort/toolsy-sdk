import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Invoice } from '@src/entities/invoice/type';
import { InvoiceCreateDto, InvoiceSearchDto } from './dto';

export class InvoiceDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'common',
  Invoice,
  { params: InvoiceSearchDto },
  PaginationResponse<Invoice>,
  { data: InvoiceCreateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.invoice.default,
    });
  }

  pay(id: string) {
    return this.common<Invoice>({
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.invoice.pay],
    });
  }
}
