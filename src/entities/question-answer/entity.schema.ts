import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { QuestionTypes } from '../question/type';
import { QuestionAnswerStatuses } from './type';

export const questionAnswerSchema = entitySchema.extend({
  questionType: z.enum(QuestionTypes).catch('' as QuestionTypes),
  questionHasAutosave: z.boolean().catch(false),
  isCorrect: z.boolean().nullable().catch(null),
  status: z.enum(QuestionAnswerStatuses).nullable().catch(null),
});
