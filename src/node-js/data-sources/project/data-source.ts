import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Project, ProjectCounters, ProjectMetrics } from '@src/entities/project/type';
import { ProjectCreateDto, ProjectSearchDto, ProjectUpdateDto } from './dto';

export class ProjectDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove' | 'common',
  Project,
  { params: ProjectSearchDto },
  PaginationResponse<Project>,
  { data: ProjectCreateDto },
  { data: ProjectUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.project.default,
    });
  }

  metrics = {
    get: (id: string) => {
      return this.common<ProjectMetrics>({
        method: HttpMethods.GET,
        urlParts: [id, cfg.api.endpoints.project.metric],
      });
    },
  };

  counters = {
    get: (id: string) => {
      return this.common<ProjectCounters>({
        method: HttpMethods.GET,
        urlParts: [id, cfg.api.endpoints.project.counter],
      });
    },
  };
}
