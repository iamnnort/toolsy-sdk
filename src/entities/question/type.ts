import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Field } from '../field/type';
import { Notification } from '../notification/type';

export type Question = Entity & {
  type: QuestionTypes;
  hasAutosave: boolean;
  hasMultipleAnswers: boolean;
  hasCustomAnswer: boolean;
  hasCorrectAnswer: boolean;
  hasRevote: boolean;
  hasShuffledOptions: boolean;
  hasAutoCheck: boolean;
  closesAt: string | null;
  validationErrorContent: Content;
  correctAnswerContent: Content;
  incorrectAnswerContent: Content;
  requestAnswerContent: Content;
  submitAnswerContent: Content;
  field: Field;
  notification: Notification;
};

export type QuestionMetrics = {
  questionAnswer: {
    count: number;
  };
  contentButtons: {
    name: string;
    count: number;
  }[];
};

export enum QuestionTypes {
  EMAIL = 'email',
  FIELD = 'field',
  NAME = 'name',
  NUMBER = 'number',
  PHONE = 'phone',
  SELECT = 'select',
  TASK = 'task',
  TEXT = 'text',
}
