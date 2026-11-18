import { NotificationTypes } from '@src/entities/notification/type';
import { QuestionAnswer, QuestionAnswerStatuses } from '@src/entities/question-answer/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type QuestionAnswerSearchDto = SearchDto<QuestionAnswer, 'isCorrect' | 'status'> & {
  projectId?: SearchField<string>;
  questionId?: SearchField<string>;
  notificationId?: SearchField<string>;
  notificationType?: SearchField<NotificationTypes>;
  visitId?: SearchField<string>;
};

export type QuestionAnswerPreviewDto = {
  clientId: string;
};

export type QuestionAnswerReviewDto = {
  status: QuestionAnswerStatuses.ACCEPTED | QuestionAnswerStatuses.REJECTED;
};
