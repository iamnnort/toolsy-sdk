import { BaseRequestConfig, PaginationResponse, RequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Client } from '@src/entities/client/type';
import { Project } from '@src/types';

export class SessionDataSource extends (RequestDataSource as new (
  config: BaseRequestConfig,
) => Pick<RequestDataSource<Client>, 'common'>) {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.session.default,
    });
  }

  getMe() {
    return this.common<Client>({
      url: cfg.api.endpoints.session.me,
    });
  }

  getProjects() {
    return this.common<PaginationResponse<Project>>({
      url: cfg.api.endpoints.session.project,
    });
  }
}
