import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Question, QuestionMetrics } from '@src/entities/question/type';
import { QuestionSearchDto, QuestionUpdateDto } from './dto';

export class QuestionDataSource extends pickRequestDataSource<
  'search' | 'get' | 'update' | 'common',
  Question,
  { params: QuestionSearchDto },
  PaginationResponse<Question>,
  never,
  { data: QuestionUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.question.default,
    });
  }

  metrics = {
    get: (id: string) => {
      return this.common<QuestionMetrics>({
        method: HttpMethods.GET,
        urlParts: [id, cfg.api.endpoints.question.metric],
      });
    },
  };
}
