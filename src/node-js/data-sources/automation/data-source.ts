import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Automation } from '@src/entities/automation/type';
import { AutomationCreateDto, AutomationSearchDto, AutomationUpdateDto } from './dto';

export class AutomationDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Automation,
  { params: AutomationSearchDto },
  PaginationResponse<Automation>,
  { data: AutomationCreateDto },
  { data: AutomationUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.automation.default,
    });
  }
}
