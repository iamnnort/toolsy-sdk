import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Visit } from '../visit/type';
import { Question, QuestionTypes } from '../question/type';

export type QuestionAnswer = Entity & {
  questionType: QuestionTypes;
  questionHasAutosave: boolean;
  isCorrect: boolean | null;
  status: QuestionAnswerStatuses | null;
  question: Question;
  visit: Visit;
  content: Content;
};

export enum QuestionAnswerStatuses {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}
