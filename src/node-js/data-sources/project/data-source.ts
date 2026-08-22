import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Project } from '@src/entities/project/type';
import { ProjectSearchDto } from './dto';

export class ProjectDataSource extends pickRequestDataSource<
  'search' | 'get',
  Project,
  { params: ProjectSearchDto },
  PaginationResponse<Project>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.project.default,
    });
  }
}
