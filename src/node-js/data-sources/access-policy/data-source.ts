import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { AccessPolicy } from '@src/entities/access-policy/type';
import { AccessPolicyCreateDto, AccessPolicySearchDto, AccessPolicyUpdateDto } from './dto';

export class AccessPolicyDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  AccessPolicy,
  { params: AccessPolicySearchDto },
  PaginationResponse<AccessPolicy>,
  { data: AccessPolicyCreateDto },
  { data: AccessPolicyUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.accessPolicy.default,
    });
  }
}
