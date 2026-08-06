import { BaseRequestConfig, RequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Client } from '@src/types/client';

export class SessionDataSource extends (RequestDataSource as new (
  config: BaseRequestConfig,
) => Pick<RequestDataSource<Client>, 'common'>) {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.session.default,
    });
  }

  me() {
    return this.common<Client>({
      url: cfg.api.endpoints.session.me,
    });
  }
}
