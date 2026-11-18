import { HttpMethods, PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { QuestionAnswer } from '@src/entities/question-answer/type';
import { QuestionAnswerPreviewDto, QuestionAnswerReviewDto, QuestionAnswerSearchDto } from './dto';

export class QuestionAnswerDataSource extends pickRequestDataSource<
  'search' | 'get' | 'remove' | 'common',
  QuestionAnswer,
  { params: QuestionAnswerSearchDto },
  PaginationResponse<QuestionAnswer>
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.questionAnswer.default,
    });
  }

  review(id: string, dto: { data: QuestionAnswerReviewDto }) {
    return this.common<QuestionAnswer>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.questionAnswer.review],
    });
  }

  preview(id: string, dto: { data: QuestionAnswerPreviewDto }) {
    return this.common<void>({
      ...dto,
      method: HttpMethods.POST,
      urlParts: [id, cfg.api.endpoints.questionAnswer.preview],
    });
  }
}
