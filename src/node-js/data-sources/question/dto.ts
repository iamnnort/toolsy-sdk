import { Question } from '@src/entities/question/type';
import { SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type QuestionSearchDto = SearchDto<Question> & {
  projectId?: SearchField<string>;
  notificationId?: SearchField<string>;
};

export type QuestionUpdateDto = UpdateDto<
  Question,
  | 'type'
  | 'hasAutosave'
  | 'hasMultipleAnswers'
  | 'hasCustomAnswer'
  | 'hasCorrectAnswer'
  | 'hasRevote'
  | 'hasShuffledOptions'
  | 'hasAutoCheck'
  | 'closesAt'
> & {
  fieldId?: UpdateField<string>;
};
